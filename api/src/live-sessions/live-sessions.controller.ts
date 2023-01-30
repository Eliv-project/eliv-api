import { Controller } from '@nestjs/common';
import { Post, Redirect, Req, Res, UseGuards } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import path from 'path';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { LiveSession } from 'src/prisma/@generated/live-session/live-session.model';
import { VideosService } from 'src/videos/videos.service';
import { VodStatus } from 'src/vod-sessions/enums/status.enum';
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
  ) {}

  @Post('/on-publish')
  @IsPublic()
  @UseGuards(IsValidStream)
  async beforePublish(@Req() request: RequestWithLiveSession) {
    console.log('Stream info', request.body);

    // Update live status on live
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
    const publishInfo: RtmpInput = request.body;

    // console.log(request.body);

    const currentLiveSessions = await this.liveSessionsService.findFirst({
      streamKey: { is: { key: { equals: publishInfo.name } } },
      status: { equals: LiveStatus.ON_LIVE },
    });

    // Update live status on live done
    await this.liveSessionsService.update(
      {
        id: currentLiveSessions.id,
      },
      {
        status: { set: LiveStatus.ENDED },
      },
    );
    console.log(
      'An user ended a live stream session with id',
      currentLiveSessions.id,
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
    const videoInfo = await this.videosService.getVideoInfo(recordPath);

    const currentLiveSessions = await this.liveSessionsService.findFirst(
      {
        streamKey: { is: { key: { equals: recordInfo.name } } },
        status: { equals: LiveStatus.ENDED },
      },
      {},
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
        duration: { set: videoInfo.format.duration },
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
