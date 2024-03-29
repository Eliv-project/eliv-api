import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ffmpegPath from 'ffmpeg-static';
import Ffmpeg from 'fluent-ffmpeg';
import { FfmpegQualityConfig } from './dto/ffmpeg-quality-config.dto';
import * as ffprobe from '@ffprobe-installer/ffprobe';
import path from 'path';
import { FfmpegOptions } from './dto/ffmpeg-options.dto';
import { VideoQualityConfigs } from './constants/quality-config';
import { getOrCreateDir } from 'src/utils/getOrCreateDir';

@Injectable()
export class FfmpegService {
  constructor(private configService: ConfigService) {}

  getFfmpeg() {
    return Ffmpeg().setFfmpegPath(ffmpegPath).setFfprobePath(ffprobe.path);
  }

  getVideoInfo(videoPath): Promise<Ffmpeg.FfprobeData> {
    return new Promise((resolve, reject) => {
      this.getFfmpeg()
        .input(videoPath)
        .ffprobe((err, data) => {
          if (err) {
            reject(err);
          }

          resolve(data);
        });
    });
  }

  checkAccelerationSupport() {
    return !!this.configService.get('withFfmpegAcceleration');
  }

  getMaxThread() {
    return this.configService.get('threadCount');
  }

  getVideoStreamConfig(qualityConfig: FfmpegQualityConfig, index: number) {
    return [
      `-filter:v:${index}`,
      `scale=-2:${qualityConfig.size.height}`,
      // `scale='min(${qualityConfig.size.width}, iw)':'min(${qualityConfig.size.height}, ih)':force_original_aspect_ratio=decrease`,
      //   `-s:v:${index} ${qualityConfig.size.width}x${qualityConfig.size.height}`,
      `-c:v:${index} libx264`, // Video codec
      `-r:v:${index} ${qualityConfig.fps}`, // Video fps
      `-b:v:${index} ${qualityConfig.videoBitrate}`, // Video bitrate
      `-maxrate:v:${index} ${qualityConfig.maxrate}`,
      `-bufsize:v:${index} ${qualityConfig.bufsize}`,
      `-c:a:${index} aac`, // Audio codec
      `-b:a:${index} ${qualityConfig.audioBitrate}`, // Audio bitrate
    ];
  }

  async toThumbnail(
    mp4Path: string,
    savePath: string,
    options?: FfmpegOptions,
  ): Promise<string | boolean> {
    const savedFilePath = path.join(savePath, 'thumbnail.png');

    getOrCreateDir(savePath);

    return new Promise((resolve, reject) => {
      this.getFfmpeg()
        .input(mp4Path)
        .outputOption([
          `-threads ${this.getMaxThread()}`,
          '-ss 00:00:01.000',
          '-vframes 1',
          `-filter:v`,
          `scale=300:-2`,
        ])
        .output(savedFilePath)
        .on('start', function (commandLine) {
          console.log('Exporting thumbnail with command: ' + commandLine);
        })
        .on('error', function (err, stdout, stderr) {
          reject(err);
        })
        .on('end', function (err, stdout, stderr) {
          resolve('thumbnail.png');
        })
        .run();
    });
  }

  async toHls(
    mp4Path: string,
    savePath: string,
    options?: FfmpegOptions,
  ): Promise<boolean> {
    const qualityConfigs = [
      VideoQualityConfigs['144p'],
      // VideoQualityConfigs['360p'],
      // VideoQualityConfigs['480p'],
      VideoQualityConfigs['720p'],
      // VideoQualityConfigs['1080p'],
    ];

    getOrCreateDir(savePath);

    // Check audio stream if existed
    const videoInfo = await this.getVideoInfo(mp4Path);
    const hasAudio = videoInfo.streams.find(
      (stream) => stream.codec_type === 'audio',
    );

    const availableConfigs = qualityConfigs.filter(({ size }) => {
      const videoStream = videoInfo.streams.find(
        ({ codec_type }) => codec_type === 'video',
      );
      if (!videoStream) {
        return false;
      }

      return (
        videoStream.height >= size.height || videoStream.width >= size.width
      );
    });


    

    return new Promise((resolve, reject) => {
      let totalTime;

      const inputStreamMaps = ['-map 0:0'];
      if (hasAudio) {
        inputStreamMaps.push('-map 0:1');
      }

      const getOutputStreamMap = (index) => {
        const outputStreamMaps = [`v:${index}`];
        if (hasAudio) {
          outputStreamMaps.push(`a:${index}`);
        }

        return outputStreamMaps.join(',');
      };

      this.getFfmpeg()
        .input(mp4Path)
        .outputOption(`-threads ${this.getMaxThread()}`)
        // Define mapping input
        // 0:0 refers to the video stream and 0:1 to the audio stream in the input file.
        // The first pair of map commands represent the video and audio stream of the first variant and will be referred to subsequently in the output as v:0 and a:0;
        // the next pair of commands represent the second variant and will be labelled as v:1 and a:1, and so on.
        // (If we wanted to generate 3 variants streams, we would need 6 map statements, assuming that each variant has a video and audio stream.)
        //   ...qualityConfigs.map(() => ['-map 0:0', '-map 0:1']).flat(),
        // Define stream codecs
        .outputOptions(availableConfigs.map(() => inputStreamMaps).flat())
        .outputOptions(
          availableConfigs
            .map((item, index) => this.getVideoStreamConfig(item, index))
            .flat(),
        )
        .outputOptions([
          '-master_pl_name master.m3u8',
          '-f hls',
          '-hls_time 4',
          '-hls_list_size 0',
          '-hls_segment_filename',
          path.join(savePath, 'v%v/fileSequence%d.ts'),
        ])
        .outputOption(
          '-var_stream_map',
          availableConfigs
            .map((_, index) => getOutputStreamMap(index))
            .join(' '),
        )
        .output(path.join(savePath, 'v%v/playlist.m3u8'))
        .on('codecData', (data) => {
          console.log(data);
          // HERE YOU GET THE TOTAL TIME
          totalTime = parseInt(data.duration.replace(/:/g, ''));
        })
        .on('start', function (commandLine) {
          console.log('Transcode video with command: ' + commandLine);
        })
        .on('error', function (err, stdout, stderr) {
          console.log(stderr);
          reject(err);
        })
        .on('progress', function (progress) {
          const time = parseInt(progress.timemark.replace(/:/g, ''));
          const percent = ((time / totalTime) * 100).toFixed(2);
          options?.onProgress?.(percent);
        })
        .on('end', function (err, stdout, stderr) {
          resolve(true);
        })
        .run();
    });
  }
}
