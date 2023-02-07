import { Module } from '@nestjs/common';
import { LiveSessionsService } from './live-sessions.service';
import { LiveSessionsResolver } from './live-sessions.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { LiveSessionsController } from './live-sessions.controller';
import { VideosService } from 'src/videos/videos.service';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';
import { BullModule } from '@nestjs/bull';
import { StreamKeysService } from 'src/stream-keys/stream-keys.service';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'mp42hls' }, { name: 'flv2mp4' }),
    PubSubModule,
  ],
  providers: [
    LiveSessionsResolver,
    LiveSessionsService,
    PrismaService,
    VideosService,
    UsersService,
    StreamKeysService,
  ],
  controllers: [LiveSessionsController],
})
export class LiveSessionsModule {}
