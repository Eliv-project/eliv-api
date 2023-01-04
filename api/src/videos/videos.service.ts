import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { VideoCreateInput } from 'src/prisma/@generated/video/video-create.input';
import { VideoUpdateInput } from 'src/prisma/@generated/video/video-update.input';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
import { VideoWhereInput } from 'src/prisma/@generated/video/video-where.input';
import { PrismaService } from 'src/prisma/prisma.service';
import Ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import { randomUUID } from 'crypto';
import path from 'path';
import fs from 'fs';
import { FfmpegQualityConfig } from './interfaces/ffmpeg-quality-config';
import { VideoQualityConfigs } from 'src/constants/videoQualityConfigs';
import { Video2HlsOptions } from './interfaces/video2hls-options.input';

@Injectable()
export class VideosService {
  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  getHlsDir(dirName: string) {
    const dir = path.join(this.configService.get('uploadPath'), dirName);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    return dir;
  }

  getHlsBitrateConfigByQuality(qualityConfig: FfmpegQualityConfig) {
    return [
      `-s:v:${qualityConfig.id} ${qualityConfig.rendition.resolution}`,
      `-c:v:${qualityConfig.id} libx264`,
      `-b:v:${qualityConfig.id} ${qualityConfig.rendition.videoBitrate}`,
    ];
  }

  async toHls({ createReadStream }: Video2HlsOptions) {
    const playlistName = randomUUID();
    const savePath = this.getHlsDir(playlistName);

    return new Promise<string>((resolve, reject) => {
      let totalTime;
      Ffmpeg(createReadStream() as fs.ReadStream)
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

  create(data: VideoCreateInput) {
    return this.prisma.video.create({ data });
  }

  findAll(where: VideoWhereInput) {
    return this.prisma.video.findMany({ where });
  }

  findOne(where: VideoWhereUniqueInput) {
    return this.prisma.video.findUnique({ where });
  }

  update(where: VideoWhereUniqueInput, data: VideoUpdateInput) {
    return this.prisma.video.update({
      where,
      data,
    });
  }

  remove(where: VideoWhereUniqueInput) {
    return this.prisma.video.delete({ where });
  }
}
