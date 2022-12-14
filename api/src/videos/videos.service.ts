import { Injectable } from '@nestjs/common';
import { VideoCreateInput } from 'src/prisma/@generated/video/video-create.input';
import { VideoUpdateInput } from 'src/prisma/@generated/video/video-update.input';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
import { VideoWhereInput } from 'src/prisma/@generated/video/video-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VideosService {
  constructor(private prisma: PrismaService) {}

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
