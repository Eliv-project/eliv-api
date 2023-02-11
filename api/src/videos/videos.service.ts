import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { VideoCreateInput } from 'src/prisma/@generated/video/video-create.input';
import { VideoUpdateInput } from 'src/prisma/@generated/video/video-update.input';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
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
import { Flv2Mp4ConvertDto } from './processors/flv2mp4.processor';
import { Mp42HlsConvertDto } from './processors/mp42hls.processor';
import { FindManyVideoArgs } from 'src/prisma/@generated/video/find-many-video.args';
import { VideoWhereInput } from 'src/prisma/@generated/video/video-where.input';

@Injectable()
export class VideosService {
  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
    @InjectQueue('mp42hls')
    private readonly mp42hlsQueue: Queue<Mp42HlsConvertDto>,
    @InjectQueue('flv2mp4')
    private readonly flv2mp4Queue: Queue<Flv2Mp4ConvertDto>,
  ) {}

  async toHls(filePath: string, dirId: string) {
    await this.mp42hlsQueue.add({
      threadCount: this.configService.get('threadCount'),
      dirId,
      filePath,
      hlsSaveDirname: dirId,
      hlsSavePath: path.join(this.configService.get('hlsPath'), dirId),
    });

    return dirId;
  }

  async toMp4(filePath: string, dirId: string) {
    await this.flv2mp4Queue.add({
      dirId,
      saveDirPath: this.configService.get('recordingPath'),
      filePath,
    });
  }

  getSearchableName(name: string) {
    return slugify(name, {
      strict: true,
      lower: true,
    });
  }

  getSlug() {
    return nanoid(10);
  }

  create(data: VideoCreateInput) {
    const searchableName = this.getSearchableName(data.name);
    const slug = this.getSlug();

    return this.prisma.video.create({
      data: { ...data, searchableName, slug },
    });
  }

  findAll(args: FindManyVideoArgs, include?: Prisma.VideoInclude) {
    return this.prisma.video.findMany({ ...args, include });
  }

  findOne(where: VideoWhereUniqueInput, include?: Prisma.VideoInclude) {
    return this.prisma.video.findUnique({ where, include });
  }

  count(where: VideoWhereInput) {
    return this.prisma.video.count({ where });
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
