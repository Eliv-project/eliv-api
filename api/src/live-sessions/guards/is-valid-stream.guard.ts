import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { RtmpInput } from '../dto/rtmp-input.dto';
import { LiveSessionsService } from '../live-sessions.service';

@Injectable()
export class IsValidStream implements CanActivate {
  constructor(private readonly liveSessionsService: LiveSessionsService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { name: streamKey } = request.body as RtmpInput;

    const liveSession = await this.liveSessionsService.findOne(
      {
        streamKey,
      },
      { video: true },
    );

      console.log(liveSession);

    if (!liveSession) {
      throw new NotFoundException('STREAM_NOT_FOUND');
    }

    request.liveSession = liveSession;
    return true;
  }
}
