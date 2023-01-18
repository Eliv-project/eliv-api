import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { VideoCreateInput } from 'src/prisma/@generated/video/video-create.input';
import { VideoUpdateInput } from 'src/prisma/@generated/video/video-update.input';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
import { VideoWhereInput } from 'src/prisma/@generated/video/video-where.input';
import { PrismaService } from 'src/prisma/prisma.service';
import path from 'path';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import slugify from 'slugify';
// @ts-ignore
import nanoid from 'nanoid';
import { Prisma } from '@prisma/client';
import Ffmpeg from 'fluent-ffmpeg';
import ffprobe from '@ffprobe-installer/ffprobe';

@Injectable()
export class VideosService {
  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
    @InjectQueue('video')
    private readonly videoQueue: Queue,
  ) {
    Ffmpeg.setFfmpegPath(ffprobe.path);
  }

  async toHls(filePath: string, dirId: string) {
    await this.videoQueue.add('convert-to-hls', {
      dirId,
      filePath,
      hlsSaveDirname: dirId,
      hlsSavePath: path.join(this.configService.get('hlsPath'), dirId),
    });

    return dirId;
  }

  getVideoInfo(filePath: string): Promise<Ffmpeg.FfprobeData> {
    return new Promise((resolve, reject) => {
      Ffmpeg.ffprobe(filePath, (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  }

  create(data: VideoCreateInput) {
    const searchableName = slugify(data.name, {
      strict: true,
      lower: true,
    });
    const slug = nanoid(10);

    return this.prisma.video.create({
      data: { ...data, searchableName, slug },
    });
  }

  findAll(where: VideoWhereInput, include?: Prisma.VideoInclude) {
    return this.prisma.video.findMany({ where, include });
  }

  findOne(where: VideoWhereUniqueInput, include?: Prisma.VideoInclude) {
    return this.prisma.video.findUnique({ where, include });
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
