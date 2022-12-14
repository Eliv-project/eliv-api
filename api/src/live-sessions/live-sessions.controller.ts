import { Controller, ForbiddenException } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';
import { RtmpInput } from './dto/rtmp-input.dto';
import { Status } from './enums/status.enum';
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

    if (liveSession.status !== Status.OFFLINE) {
      return new ForbiddenException('INVALID_LIVE_SESSION');
    }

    await this.liveSessionsService.update(
      {
        streamKey,
      },
      {
        status: { set: Status.WAITING },
      },
    );
    console.log('An user started a live stream session with key', streamKey);

    return { ok: true };
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
        status: { set: Status.ENDED },
      },
    );
    console.log('An user ended a live stream session with key', streamKey);

    return { ok: true };
  }
}
