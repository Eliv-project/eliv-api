import { BadRequestException, Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import path, { join } from 'path';
import { WriteFileOptions } from './dto/write-file-options.dto';
import { UploadedFile } from './interfaces/uploaded-file.interface';
import Ffmpeg from 'fluent-ffmpeg';
import pathToFfmpeg from 'ffmpeg-static';
import fs from 'fs';
import { ConfigService } from '@nestjs/config';

interface FfmpegBaseConfig {
  id?: number;
  rendition: {
    res: string;
    videoBitrate: string;
    audioBitrate: string;
  };
}

interface FfmpegBitrateConfig {
  '360p'?: FfmpegBaseConfig;
  '480p'?: FfmpegBaseConfig;
  '720p'?: FfmpegBaseConfig;
  '1080p'?: FfmpegBaseConfig;
}

@Injectable()
export class UploadService {
  constructor(private readonly configService: ConfigService) {}

  getUploadDir = () => {
    const dir = join(process.cwd(), `./upload`);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    return dir;
  };

  getVideoDir = (dirName: string): string => {
    const dir = join(this.configService.get('uploadPath'), dirName);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    return dir;
  };

  getQualityStringConfig(qualityConfig: FfmpegBaseConfig) {
    return [
      `-s:v:${qualityConfig.id} ${qualityConfig.rendition.res}`,
      `-c:v:${qualityConfig.id} libx264`,
      `-b:v:${qualityConfig.id} ${qualityConfig.rendition.videoBitrate}`,
    ];
  }

  convertFileToChunks = ({
    createReadStream,
  }: WriteFileOptions): Promise<string> => {
    const playlistName = Date.now().toString();
    const savePath = this.getVideoDir(playlistName);

    return new Promise((res, rej) => {
      const configByQualities: FfmpegBitrateConfig = {
        '360p': {
          id: 0,
          rendition: {
            res: '640x360',
            videoBitrate: '800k',
            audioBitrate: '96k',
          },
        },
        '480p': {
          id: 1,
          rendition: {
            res: '842x480',
            videoBitrate: '1400k',
            audioBitrate: '128k',
          },
        },
        '720p': {
          id: 2,
          rendition: {
            res: '1280x720',
            videoBitrate: '2800k',
            audioBitrate: '128k',
          },
        },
        '1080p': {
          rendition: {
            res: '1920x1080',
            videoBitrate: '5000k',
            audioBitrate: '192k',
          },
        },
      };

      Ffmpeg(createReadStream() as fs.ReadStream)
        .setFfmpegPath(pathToFfmpeg)
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
            ...this.getQualityStringConfig(configByQualities['360p']),
            ...this.getQualityStringConfig(configByQualities['480p']),
            ...this.getQualityStringConfig(configByQualities['720p']),
            '-c:a copy',
            '-var_stream_map',
            'v:0,a:0 v:1,a:1 v:2,a:2',
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
        .on('start', function (commandLine) {
          console.log('Spawned Ffmpeg with command: ' + commandLine);
        })
        .on('error', function (err, stdout, stderr) {
          console.log('An error occurred: ' + err.message, err, stderr);
          rej(false);
        })
        .on('progress', function (progress) {
          console.log('Processing: ' + progress.percent + '% done');
        })
        .on('end', function (err, stdout, stderr) {
          console.log('Finished processing!' /*, err, stdout, stderr*/);
          res(playlistName);
        })
        .run();
    });
  };

  writeFileToDir = ({
    createReadStream,
    filename,
  }: WriteFileOptions): Promise<UploadedFile> =>
    new Promise(async (resolve, reject) => {
      const uploadDirPath = this.getUploadDir();

      createReadStream()
        .pipe(createWriteStream(join(uploadDirPath, `./${filename}`)))
        .on('finish', () =>
          resolve({
            filename,
            path: filename,
          }),
        )
        .on('error', (err: Error) => {
          console.error(err);
          reject(new BadRequestException('SAVE_FILE_FAILED'));
        });
    });
}
