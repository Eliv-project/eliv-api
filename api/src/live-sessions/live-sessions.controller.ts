import { Controller } from '@nestjs/common';
import {
  Inject,
  Post,
  Redirect,
  Req,
  UseGuards,
} from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import path from 'path';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { SubscriptionEvents } from 'src/common/constants/subscription-events.constant';
import { LiveSession } from 'src/prisma/@generated/live-session/live-session.model';
import { PUB_SUB } from 'src/pub-sub/pub-sub.module';
import { UsersService } from 'src/users/users.service';
import { getOrCreateDir } from 'src/utils/getOrCreateDir';
import { VideosService } from 'src/videos/videos.service';
import { VodStatus } from 'src/vod-sessions/enums/status.enum';
import { LiveSessionStatus } from './dto/live-session-status.output';
import { RtmpInput } from './dto/rtmp-input.dto';
import { RtmpRecord } from './dto/rtmp-record.dto';
import { LiveStatus } from './enums/status.enum';
import { IsValidStream } from './guards/is-valid-stream.guard';
import { LiveSessionsService } from './live-sessions.service';

interface RequestWithLiveSession extends Request {
  liveSession: LiveSession;
}

@Controller('live-sessions')
export class LiveSessionsController {
  constructor(
    private liveSessionsService: LiveSessionsService,
    private videosService: VideosService,
    private configService: ConfigService,
    private usersService: UsersService,
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
  ) {}

  @Post('/on-publish')
  @IsPublic()
  @UseGuards(IsValidStream)
  @Redirect()
  async beforePublish(@Req() request: RequestWithLiveSession) {
    console.log('Stream info', request.body);

    const hlsPath = this.configService.get('hlsPath');
    const dirId = request.liveSession.video.dirId;
    const publisher = this.pubSub;
    const publishEvent = [SubscriptionEvents.LIVE_STATUS, dirId].join('_');
    publisher.publish<{ currentLiveStatus: LiveSessionStatus }>(publishEvent, {
      currentLiveStatus: {
        status: LiveStatus.ON_LIVE,
      },
    });

    // Update live status on live
    await this.liveSessionsService.update(
      {
        id: request.liveSession.id,
      },
      {
        status: { set: LiveStatus.ON_LIVE },
        video: {
          update: {
            thumbnail: {
              provider: 'local',
              data: {
                url: `/${dirId}/thumbnail.png`,
              },
            },
          },
        },
      },
    );
    // Update user status
    await this.usersService.update(
      { id: request.liveSession.video.userId },
      {
        onLive: { set: true },
      },
    );

    getOrCreateDir(path.join(hlsPath, dirId));

    console.log(
      'An user started a live stream session with id',
      request.liveSession.id,
    );

    return {
      url: request.liveSession.video.dirId,
    };
  }

  @Post('/on-publish-done')
  @IsPublic()
  async afterPublish(@Req() request: Request) {
    const publishInfo: RtmpInput = request.body;

    // console.log(request.body);

    const currentLiveSession = await this.liveSessionsService.findFirst(
      {
        streamKey: { is: { key: { equals: publishInfo.name } } },
        status: { equals: LiveStatus.ON_LIVE },
      },
      [],
      { video: { include: { user: true } } },
    );

    if (!currentLiveSession) {
      return true;
    }

    // Update live status on live done
    await this.liveSessionsService.update(
      {
        id: currentLiveSession.id,
      },
      {
        status: { set: LiveStatus.ENDED },
      },
    );
    // Update user status
    await this.usersService.update(
      { id: currentLiveSession.video.userId },
      { onLive: { set: false } },
    );

    const dirId = currentLiveSession.video.dirId;
    const publisher = this.pubSub;
    const publishEvent = [SubscriptionEvents.LIVE_STATUS, dirId].join('_');
    publisher.publish<{ currentLiveStatus: LiveSessionStatus }>(publishEvent, {
      currentLiveStatus: {
        status: LiveStatus.ENDED,
      },
    });

    console.log(
      'An user ended a live stream session with id',
      currentLiveSession.id,
    );
    return true;
  }

  @Post('/on-record-done')
  @IsPublic()
  async afterRecord(@Req() request: RequestWithLiveSession) {
    const recordInfo: RtmpRecord = request.body;
    let recordPath = recordInfo.path;
    if (this.configService.get('isDev')) {
      const fileName = path.basename(recordInfo.path);
      recordPath = path.join(this.configService.get('recordingPath'), fileName);
    }

    // Update video info
    // Create vod session (live record)
    const recordedDirId = recordInfo.name;

    const currentLiveSessions = await this.liveSessionsService.findFirst(
      {
        video: { is: { dirId: { equals: recordedDirId } } },
      },
      [],
      { video: true },
    );

    console.log(
      'A live session has been recorded with id',
      currentLiveSessions.id,
    );

    await this.videosService.update(
      {
        id: currentLiveSessions.videoId,
      },
      {
        vodSession: {
          create: {
            status: VodStatus.empty,
          },
        },
      },
    );

    await this.videosService.toHls(recordPath, currentLiveSessions.video.dirId);

    return true;
  }
}
