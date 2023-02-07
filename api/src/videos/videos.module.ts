import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosResolver } from './videos.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { BullModule } from '@nestjs/bull';
import { UploadService } from 'src/upload/upload.service';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';
import { Mp42HlsProcessor } from './processors/mp42hls.processor';
import { VotesService } from 'src/votes/votes.service';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'mp42hls' }, { name: 'flv2mp4' }),
    PubSubModule,
  ],
  providers: [
    VideosResolver,
    VideosService,
    PrismaService,
    Mp42HlsProcessor,
    UploadService,
  ],
  exports: [VideosService],
})
export class VideosModule {}
