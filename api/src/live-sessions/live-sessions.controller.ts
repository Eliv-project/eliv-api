import { Controller } from '@nestjs/common';
import { Post, Redirect, Req, Res, UseGuards } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import path from 'path';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';
import { LiveSession } from 'src/prisma/@generated/live-session/live-session.model';
import { VideosService } from 'src/videos/videos.service';
import { VodStatus } from 'src/vod-sessions/enums/status.enum';
import { RtmpRecord } from './dto/rtmp-record.dto';
import { LiveStatus } from './enums/status.enum';
import { IsValidStream } from './guards/is-valid-stream.guard';
import { LiveSessionsService } from './live-sessions.service';

interface RequestWithLiveSession extends Request {
  liveSession: LiveSession;
}

@Controller('live-sessions')
@UseGuards(IsValidStream)
export class LiveSessionsController {
  constructor(
    private liveSessionsService: LiveSessionsService,
    private videosService: VideosService,
    private configService: ConfigService,
  ) {}

  @Post('/on-publish')
  @IsPublic()
  @Redirect()
  async beforePublish(@Req() request: RequestWithLiveSession) {
    await this.liveSessionsService.update(
      {
        id: request.liveSession.id,
      },
      {
        status: { set: LiveStatus.ON_LIVE },
      },
    );
    console.log(
      'An user started a live stream session with id',
      request.liveSession.id,
    );

    return true;
  }

  @Post('/on-publish-done')
  @IsPublic()
  async afterPublish(@Req() request: RequestWithLiveSession) {
    await this.liveSessionsService.update(
      {
        id: request.liveSession.id,
      },
      {
        status: { set: LiveStatus.ENDED },
      },
    );
    console.log(
      'An user ended a live stream session with id',
      request.liveSession.id,
    );
    return true;
  }

  @Post('/on-record-done')
  @IsPublic()
  async afterRecord(@Req() request: RequestWithLiveSession) {
    const recordInfo: RtmpRecord = request.body;
    const recordPath = path.join(
      this.configService.get('recordingPath'),
      [recordInfo.name, 'flv'].join('.'),
    );

    // Update video info
    // Create vod session (live record)
    const videoInfo = await this.videosService.getVideoInfo(recordPath);

    await this.videosService.update(
      {
        id: request.liveSession.videoId,
      },
      {
        duration: { set: videoInfo.format.duration },
        vodSession: {
          create: {
            status: VodStatus.empty,
          },
        },
      },
    );

    await this.videosService.toHls(recordPath, request.liveSession.video.dirId);

    return true;
  }
}
