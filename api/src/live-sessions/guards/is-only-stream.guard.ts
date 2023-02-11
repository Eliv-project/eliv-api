import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from 'src/prisma/@generated/user/user.model';
import { LiveStatus } from '../enums/status.enum';
import { LiveSessionsService } from '../live-sessions.service';

@Injectable()
export class IsOnlyStream implements CanActivate {
  constructor(private readonly liveSessionsService: LiveSessionsService) {}

  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const user: User = ctx.getContext().user || ctx.getContext().req.user;

    const validStream = await this.liveSessionsService.findFirst({
      video: {
        is: {
          userId: { equals: user.id },
        },
      },
      status: { not: { equals: LiveStatus.ENDED } },
    });

    if (validStream) {
      throw new BadRequestException('LAST_STREAM_IS_ACTIVE');
    }

    return true;
  }
}
