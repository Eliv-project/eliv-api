import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosResolver } from './videos.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadService } from 'src/upload/upload.service';

@Module({
  providers: [VideosResolver, VideosService, PrismaService, UploadService],
})
export class VideosModule {}
