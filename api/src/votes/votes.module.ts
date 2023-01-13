import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesResolver } from './votes.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { VideosService } from 'src/videos/videos.service';
import { ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';

@Module({
  imports: [BullModule.registerQueue({ name: 'video' }), PubSubModule],
  providers: [
    VotesResolver,
    VotesService,
    PrismaService,
    VideosService,
    ConfigService,
  ],
})
export class VotesModule {}
