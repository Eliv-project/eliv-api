import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosResolver } from './videos.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { VideoConsumer } from './consumers/video.consumer';
import { BullModule } from '@nestjs/bull';
import { UploadService } from 'src/upload/upload.service';

@Module({
  imports: [BullModule.registerQueue({ name: 'video' })],
  providers: [
    VideosResolver,
    VideosService,
    PrismaService,
    VideoConsumer,
    UploadService,
  ],
})
export class VideosModule {}
