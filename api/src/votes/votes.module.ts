import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesResolver } from './votes.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { VideosService } from 'src/videos/videos.service';
import { ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';
import { CommentsService } from 'src/comments/comments.service';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'mp42hls' }, { name: 'flv2mp4' }),
    PubSubModule,
  ],
  providers: [
    VotesResolver,
    VotesService,
    PrismaService,
    VideosService,
    ConfigService,
    CommentsService,
  ],
})
export class VotesModule {}
