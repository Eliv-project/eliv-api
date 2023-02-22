import {
  OnQueueActive,
  OnQueueCompleted,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';
import ffmpegPath from 'ffmpeg-static';
import Ffmpeg from 'fluent-ffmpeg';
import { VideosService } from '../videos.service';
import path from 'path';
import fs from 'fs';

export interface Flv2Mp4ConvertDto {
  filePath: string;
  dirId: string;
  saveDirPath: string;
}

@Processor('flv2mp4')
export class Flv2Mp4Processor {
  constructor(private readonly videosService: VideosService) {}

  @OnQueueCompleted()
  async onComplete(job: Job<Flv2Mp4ConvertDto>, result) {
    console.log(`Complete job ${job.id}`, result);

    try {
      // Clean up tmp recordings
      const { filePath, dirId } = job.data;
      fs.unlinkSync(filePath);

      // Convert output mp4 to our hls
      await this.videosService.toHls(result, dirId);
    } catch (err) {
      console.error(err);
    }
  }

  @OnQueueActive()
  async onActive(job: Job<Flv2Mp4ConvertDto>) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data`,
      job.data,
    );
  }

  @Process()
  async convert(job: Job<Flv2Mp4ConvertDto>) {
    const outputPath = path.join(job.data.saveDirPath, `${job.data.dirId}.mp4`);

    return new Promise<string>((resolve, reject) => {
      let totalTime;
      Ffmpeg({ source: job.data.filePath })
        .setFfmpegPath(ffmpegPath)
        // And its playlist file's location
        .output(outputPath)
        .on('codecData', (data) => {
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
          const percent = ((time / totalTime) * 100).toFixed(2);

          console.log('Processing: ' + percent + '% done');
        })
        .on('end', function (err, stdout, stderr) {
          console.log('Finished processing!' /*, err, stdout, stderr*/);
          resolve(outputPath);
        })
        .run();
    });
  }
}
