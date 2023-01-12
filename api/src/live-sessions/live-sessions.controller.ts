import { Controller, ForbiddenException } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';
import { RtmpInput } from './dto/rtmp-input.dto';
import { LiveStatus } from './enums/status.enum';
import { LiveSessionsService } from './live-sessions.service';

@Controller('live-sessions')
export class LiveSessionsController {
  constructor(private liveSessionsService: LiveSessionsService) {}

  @Post('/connect')
  @IsPublic()
  async beforeConnect(@Body() body: RtmpInput) {
    const streamKey = body.name;
    const liveSession = await this.liveSessionsService.findOne({
      streamKey,
    });
    if (!liveSession) {
      return new ForbiddenException();
    }

    if (liveSession.status !== LiveStatus.OFFLINE) {
      return new ForbiddenException('INVALID_LIVE_SESSION');
    }

    await this.liveSessionsService.update(
      {
        streamKey,
      },
      {
        status: { set: LiveStatus.ON_LIVE },
      },
    );
    console.log('An user started a live stream session with key', streamKey);
    return true;
  }

  @Post('/end')
  @IsPublic()
  async afterEnd(@Body() body: RtmpInput) {
    const streamKey = body.name;

    await this.liveSessionsService.update(
      {
        streamKey,
      },
      {
        status: { set: LiveStatus.ENDED },
      },
    );
    console.log('An user ended a live stream session with key', streamKey);
    return true;
  }
}
