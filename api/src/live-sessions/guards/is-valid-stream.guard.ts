import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { StreamKeysService } from 'src/stream-keys/stream-keys.service';
import { RtmpInput } from '../dto/rtmp-input.dto';
import { LiveStatus } from '../enums/status.enum';
import { LiveSessionsService } from '../live-sessions.service';

@Injectable()
export class IsValidStream implements CanActivate {
  constructor(
    private readonly liveSessionsService: LiveSessionsService,
    private readonly streamKeysService: StreamKeysService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { name: key } = request.body as RtmpInput;

    // Check valid stream key
    const streamKey = await this.streamKeysService.findOne({ key });
    if (!streamKey) {
      throw new BadRequestException('INVALID_STREAM_KEY');
    }

    // Verify 1 stream per key
    const currentLiveSessions = await this.liveSessionsService.findAll({
      streamKeyId: { equals: streamKey.id },
      status: { equals: LiveStatus.ON_LIVE },
    });
    if (currentLiveSessions?.length > 0) {
      throw new BadRequestException('STREAM_KEY_IS_CURRENTLY_USING');
    }

    // Get valid live session
    const liveSession = await this.liveSessionsService.findFirst(
      {
        streamKeyId: { equals: streamKey.id },
        status: {
          not: {
            equals: LiveStatus.ENDED,
          },
        },
      },
      [{ updatedAt: 'desc' }],
      { video: true },
    );
    if (!liveSession) {
      throw new NotFoundException('LIVE_SESSION_NOT_FOUND');
    }

    request.liveSession = liveSession;
    return true;
  }
}
