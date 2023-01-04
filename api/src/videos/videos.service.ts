import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { VideoCreateInput } from 'src/prisma/@generated/video/video-create.input';
import { VideoUpdateInput } from 'src/prisma/@generated/video/video-update.input';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
import { VideoWhereInput } from 'src/prisma/@generated/video/video-where.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'crypto';
import path from 'path';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class VideosService {
  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
    @InjectQueue('video')
    private readonly videoQueue: Queue,
  ) {}

  async toHls(filePath: string) {
    const dirId = randomUUID();

    await this.videoQueue.add('convert-to-hls', {
      filePath,
      hlsSaveDirname: dirId,
      hlsSavePath: path.join(this.configService.get('hlsPath'), dirId),
    });

    return dirId;
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
