import { Module } from '@nestjs/common';
import { LiveSessionsService } from './live-sessions.service';
import { LiveSessionsResolver } from './live-sessions.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { LiveSessionsController } from './live-sessions.controller';
import { VideosService } from 'src/videos/videos.service';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [BullModule.registerQueue({ name: 'video' }), PubSubModule],
  providers: [
    LiveSessionsResolver,
    LiveSessionsService,
    PrismaService,
    VideosService,
  ],
  controllers: [LiveSessionsController],
})
export class LiveSessionsModule {}
