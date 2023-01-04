import {
  Processor,
  Process,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  OnQueueWaiting,
} from '@nestjs/bull';
import ffmpegPath from 'ffmpeg-static';
import Ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import fs from 'fs';
import { FfmpegQualityConfig } from '../interfaces/ffmpeg-quality-config';
import { Video2HlsOptions } from '../interfaces/video2hls-options.input';
import { VideoQualityConfigs } from 'src/constants/videoQualityConfigs';
import { Job } from 'bull';
import { getOrCreateDir } from 'src/utils/getOrCreateDir';

interface ConvertDto {
  hlsSavePath: string;
  filePath: string;
  hlsSaveDirname: string;
}

@Processor('video')
export class VideoConsumer {
  getHlsBitrateConfigByQuality(qualityConfig: FfmpegQualityConfig) {
    return [
      `-s:v:${qualityConfig.id} ${qualityConfig.rendition.resolution}`,
      `-c:v:${qualityConfig.id} libx264`,
      `-b:v:${qualityConfig.id} ${qualityConfig.rendition.videoBitrate}`,
    ];
  }

  @OnQueueCompleted()
  onComplete(job: Job<ConvertDto>, result) {
    console.log(`Complete job ${job.id}, now cleaning up tmp files`, result);

    const { filePath } = job.data;
    fs.unlinkSync(filePath);
  }
  @OnQueueFailed()
  onFail(job: Job, err: Error) {
    console.log(`Failed job ${job.id} of type ${job.name} with error`, err);
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data`,
      job.data,
    );
  }

  @Process('convert-to-hls')
  async convertToHls(job: Job<ConvertDto>) {
    const { hlsSavePath, filePath, hlsSaveDirname } = job.data;

    const playlistName = hlsSaveDirname;
    const savePath = getOrCreateDir(hlsSavePath);

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
            '-map 0:0',
            '-map 0:1',
            '-map 0:0',
            '-map 0:1',
            '-map 0:0',
            '-map 0:1',
            // The next lines specify how each video stream should be encoded
            // ...this.getQualityStringConfig(VideoQualityConfigs['360p']),
            ...this.getHlsBitrateConfigByQuality(VideoQualityConfigs['480p']),
            // ...this.getQualityStringConfig(VideoQualityConfigs['720p']),
            '-c:a copy',
            // '-var_stream_map',
            // Mapping each stream to master playlist
            // this.getQualityVarStreamMapString(VideoQualityConfigs['360p'].id),
            // this.getQualityVarStreamMapString(VideoQualityConfigs['480p'].id),
            // this.getQualityVarStreamMapString(VideoQualityConfigs['720p'].id),
            '-master_pl_name master.m3u8',
            '-f hls',
            '-hls_time 6',
            '-hls_list_size 0',
            '-hls_segment_filename',
            // Saved segments location
            path.join(savePath, 'v%v/fileSequence%d.ts'),
          ],
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
          reject();
        })
        .on('progress', function (progress) {
          const time = parseInt(progress.timemark.replace(/:/g, ''));
          const percent = (time / totalTime) * 100;

          console.log('Processing: ' + percent + '% done');
        })
        .on('end', function (err, stdout, stderr) {
          console.log('Finished processing!' /*, err, stdout, stderr*/);
          resolve(playlistName);
        })
        .run();
    });
  }
}
