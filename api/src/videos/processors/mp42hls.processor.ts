import {
  Processor,
  Process,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
} from '@nestjs/bull';
import ffmpegPath from 'ffmpeg-static';
import Ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import fs from 'fs';
import { FfmpegQualityConfig } from '../interfaces/ffmpeg-quality-config';
import { VideoQualityConfigs } from 'src/common/constants/videoQualityConfigs';
import { Job } from 'bull';
import { getOrCreateDir } from 'src/utils/getOrCreateDir';
import { Inject } from '@nestjs/common';
import { VideosService } from '../videos.service';
import { PUB_SUB } from 'src/pub-sub/pub-sub.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { SubscriptionEvents } from 'src/common/constants/subscription-events.constant';
import { VodStatus } from 'src/vod-sessions/enums/status.enum';
import { ProcessProgress } from '../models/process-progress.model';

export interface Mp42HlsConvertDto {
  hlsSavePath: string;
  filePath: string;
  hlsSaveDirname: string;
  dirId: string;
}

@Processor('mp42hls')
export class Mp42HlsProcessor {
  constructor(
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
    private readonly videosService: VideosService,
  ) {}

  getStreamMapString(qualityConfig: FfmpegQualityConfig, index: number) {
    return [`v:${index}`, `a:${index}`].join(',');
  }

  getHlsBitrateConfigByQuality(
    qualityConfig: FfmpegQualityConfig,
    index: number,
  ) {
    return [
      `-s:v:${index} ${qualityConfig.rendition.resolution}`, // Scale
      `-c:v:${index} libx264`, // Codec
      `-b:v:${index} ${qualityConfig.rendition.videoBitrate}`, // Bitrate
    ];
  }

  @OnQueueCompleted()
  async onComplete(job: Job<Mp42HlsConvertDto>, result) {
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
  async convertToHls(job: Job<Mp42HlsConvertDto>) {
    const { hlsSavePath, filePath, hlsSaveDirname, dirId } = job.data;

    const playlistName = hlsSaveDirname;
    const savePath = getOrCreateDir(hlsSavePath);
    const publisher = this.pubSub;
    const publishEvent = [SubscriptionEvents.UPLOAD_VIDEO_PROGRESS, dirId].join(
      '_',
    );

    const bitrateConfigs = [
      VideoQualityConfigs['720p'],
      VideoQualityConfigs['480p'],
      // VideoQualityConfigs['360p'],
    ];

    return new Promise<string>((resolve, reject) => {
      let totalTime;
      Ffmpeg({ source: filePath })
        .setFfmpegPath(ffmpegPath)
        .outputOptions(
          // 0:0 refers to the video stream and 0:1 to the audio stream in the input file.
          // The first pair of map commands represent the video and audio stream of the first variant and will be referred to subsequently in the output as v:0 and a:0;
          // the next pair of commands represent the second variant and will be labelled as v:1 and a:1, and so on.
          // (If we wanted to generate 3 variants streams, we would need 6 map statements, assuming that each variant has a video and audio stream.)
          [
            ...bitrateConfigs.map(() => ['-map 0:0', '-map 0:1']).flat(),
            '-threads 0',
            // The next lines specify how each video stream should be encoded
            ...bitrateConfigs
              .map((item, index) =>
                this.getHlsBitrateConfigByQuality(item, index),
              )
              .flat(),
            `-c:a copy`, // Audio codec
            '-master_pl_name master.m3u8',
            '-f hls',
            '-hls_time 6',
            '-hls_list_size 0',
            '-hls_segment_filename',
            // Saved segments location
            path.join(savePath, 'v%v/fileSequence%d.ts'),
          ],
        )
        // Mapping each stream to master playlist
        .outputOption(
          '-var_stream_map',
          bitrateConfigs
            .map((item, index) => this.getStreamMapString(item, index))
            .join(' '),
        )
        // And its playlist file's location
        .output(path.join(savePath, 'v%v/playlist.m3u8'))
        .on('codecData', (data) => {
          // HERE YOU GET THE TOTAL TIME
          totalTime = parseInt(data.duration.replace(/:/g, ''));
        })
        .on('start', function (commandLine) {
          console.log('Spawned Ffmpeg with command: ' + commandLine);
        })
        .on('error', function (err, stdout, stderr) {
          console.log('An error occurred: ' + err.message, err, stderr);
          publisher.publish<{ currentProcessProgress: ProcessProgress }>(
            publishEvent,
            {
              currentProcessProgress: {
                status: 'failed',
              },
            },
          );

          reject();
        })
        .on('progress', function (progress) {
          const time = parseInt(progress.timemark.replace(/:/g, ''));
          const percent = ((time / totalTime) * 100).toFixed(2);

          console.log('Processing: ' + percent + '% done');
          publisher.publish<{ currentProcessProgress: ProcessProgress }>(
            publishEvent,
            {
              currentProcessProgress: {
                status: 'processing',
                progress: parseFloat(percent),
              },
            },
          );
        })
        .on('end', function (err, stdout, stderr) {
          console.log('Finished processing!' /*, err, stdout, stderr*/);
          publisher.publish<{ currentProcessProgress: ProcessProgress }>(
            publishEvent,
            {
              currentProcessProgress: {
                status: 'success',
              },
            },
          );
          resolve(playlistName);
        })
        .run();
    });
  }
}
