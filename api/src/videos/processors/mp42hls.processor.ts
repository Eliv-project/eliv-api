import {
  Processor,
  Process,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
} from '@nestjs/bull';
import fs from 'fs';
import { Job } from 'bull';
import { Inject } from '@nestjs/common';
import { VideosService } from '../videos.service';
import { PUB_SUB } from 'src/pub-sub/pub-sub.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { SubscriptionEvents } from 'src/common/constants/subscription-events.constant';
import { VodStatus } from 'src/vod-sessions/enums/status.enum';
import { ProcessProgress } from '../models/process-progress.model';
import { FfmpegService } from 'src/ffmpeg/ffmpeg.service';

export interface Mp42HlsConvertDto {
  hlsSavePath: string;
  filePath: string;
  hlsSaveDirname: string;
  dirId: string;
  threadCount?: number;
  withThumbnail?: boolean;
}

interface Mp42HlsResult {
  thumbnailFileName;
  hlsPath;
}

@Processor('mp42hls')
export class Mp42HlsProcessor {
  constructor(
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
    private readonly videosService: VideosService,
    private readonly ffmpegService: FfmpegService,
  ) {}

  @OnQueueCompleted()
  async onComplete(job: Job<Mp42HlsConvertDto>, result: Mp42HlsResult) {
    console.log(`Complete job ${job.id}`, result);

    try {
      // Clean up tmp file
      const { filePath } = job.data;
      fs.unlinkSync(filePath);

      // Update vod status
      await this.videosService.update(
        {
          dirId: job.data.dirId,
        },
        {
          thumbnail: {
            provider: 'local',
            data: {
              url: `/${job.data.dirId}/${result.thumbnailFileName}`,
            },
          },
          vodSession: {
            update: {
              status: { set: VodStatus.ready },
            },
          },
        },
      );
    } catch (err) {
      console.error(err);
    }
  }

  @OnQueueFailed()
  async onFail(job: Job<Mp42HlsConvertDto>, err: Error) {
    console.log(`Failed job ${job.id} of type ${job.name} with error`, err);

    const { dirId } = job.data;

    const publisher = this.pubSub;
    const publishEvent = [SubscriptionEvents.UPLOAD_VIDEO_PROGRESS, dirId].join(
      '_',
    );
    publisher.publish<{ currentProcessProgress: ProcessProgress }>(
      publishEvent,
      {
        currentProcessProgress: {
          status: 'failed',
        },
      },
    );

    try {
      // Clean up tmp file
      const { filePath } = job.data;
      fs.unlinkSync(filePath);

      // Update vod status
      await this.videosService.update(
        {
          dirId: job.data.dirId,
        },
        {
          vodSession: {
            update: {
              status: { set: VodStatus.empty },
            },
          },
        },
      );
    } catch (err) {
      console.error(err);
    }
  }

  @OnQueueActive()
  async onActive(job: Job<Mp42HlsConvertDto>) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data`,
      job.data,
    );

    // Update vod status
    try {
      await this.videosService.update(
        {
          dirId: job.data.dirId,
        },
        {
          vodSession: {
            update: {
              status: {
                set: VodStatus.processing,
              },
            },
          },
        },
      );
    } catch (err) {
      console.error(err);
    }
  }

  @Process()
  async convertToHls(job: Job<Mp42HlsConvertDto>): Promise<Mp42HlsResult> {
    const { hlsSavePath, filePath, dirId, withThumbnail = true } = job.data;
    let savedThumbnailFileName;
    const publisher = this.pubSub;
    const publishEvent = [SubscriptionEvents.UPLOAD_VIDEO_PROGRESS, dirId].join(
      '_',
    );

    if (withThumbnail) {
      publisher.publish<{ currentProcessProgress: ProcessProgress }>(
        publishEvent,
        {
          currentProcessProgress: {
            status: 'processing',
            message: 'GENERATING_THUMBNAIL',
          },
        },
      );

      savedThumbnailFileName = await this.ffmpegService.toThumbnail(
        filePath,
        hlsSavePath,
      );
    }

    publisher.publish<{ currentProcessProgress: ProcessProgress }>(
      publishEvent,
      {
        currentProcessProgress: {
          status: 'processing',
          message: 'TRANSCODING',
        },
      },
    );

    await this.ffmpegService.toHls(filePath, hlsSavePath, {
      onProgress: (percent) =>
        publisher.publish<{ currentProcessProgress: ProcessProgress }>(
          publishEvent,
          {
            currentProcessProgress: {
              status: 'processing',
              progress: parseFloat(percent),
            },
          },
        ),
    });

    return {
      hlsPath: hlsSavePath,
      thumbnailFileName: savedThumbnailFileName,
    };
  }
}
