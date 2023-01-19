import { Controller, ForbiddenException } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
import Ffmpeg from 'fluent-ffmpeg';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';
import { RtmpInput } from './dto/rtmp-input.dto';
import { LiveStatus } from './enums/status.enum';
import { LiveSessionsService } from './live-sessions.service';
import ffprobe from '@ffprobe-installer/ffprobe';
import { join } from 'path';
import { existsSync } from 'fs';

@Controller('live-sessions')
export class LiveSessionsController {
  constructor(private liveSessionsService: LiveSessionsService) {}

  @Get('/test')
  @IsPublic()
  async test() {
    Ffmpeg.setFfmpegPath(ffprobe.path);
    console.log(existsSync(join('../upload/hls/abc/index.m3u8')));
    const result: Ffmpeg.FfprobeData = await new Promise((resolve, reject) => {
      Ffmpeg.ffprobe(join('../upload/hls/abc/index.m3u8'), (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
    console.log(result);
    return result;
  }

  @Post('/connect')
  @IsPublic()
  async beforeConnect(@Body() body) {
    console.log(body);
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
