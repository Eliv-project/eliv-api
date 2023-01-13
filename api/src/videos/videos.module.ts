import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosResolver } from './videos.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { VideoProcessor } from './processors/video.processor';
import { BullModule } from '@nestjs/bull';
import { UploadService } from 'src/upload/upload.service';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';

@Module({
  imports: [BullModule.registerQueue({ name: 'video' }), PubSubModule],
  providers: [
    VideosResolver,
    VideosService,
    PrismaService,
    VideoProcessor,
    UploadService,
  ],
  exports: [VideosService],
})
export class VideosModule {}
