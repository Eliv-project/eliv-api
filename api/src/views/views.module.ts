import { Module } from '@nestjs/common';
import { ViewsService } from './views.service';
import { ViewsResolver } from './views.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { ViewersService } from 'src/viewers/viewers.service';
import { VideosService } from 'src/videos/videos.service';
import { BullModule } from '@nestjs/bull';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'mp42hls' }, { name: 'flv2mp4' }),
    PubSubModule,
  ],
  providers: [
    ViewsResolver,
    ViewsService,
    PrismaService,
    ViewersService,
    VideosService,
  ],
})
export class ViewsModule {}
