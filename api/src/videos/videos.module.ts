import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosResolver } from './videos.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [VideosResolver, VideosService, PrismaService],
})
export class VideosModule {}
