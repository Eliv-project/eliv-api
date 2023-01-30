import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from 'src/prisma/@generated/user/user.model';
import { StreamKeysService } from 'src/stream-keys/stream-keys.service';

@Injectable()
export class WithStreamKey implements CanActivate {
  constructor(private readonly streamKeysService: StreamKeysService) {}

  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    const user: User = ctx.getContext().user || ctx.getContext().req.user;

    const defaultStreamKey = await this.streamKeysService.findFirst({
      userId: { equals: user.id },
      isDefault: { equals: true },
    });

    // Create default stream key (if not existed)
    if (!defaultStreamKey) {
      request.streamKey = await this.streamKeysService.create({
        name: 'DEFAULT',
        desc: '',
        user: {
          connect: { username: user.username },
        },
        isDefault: true,
      });
    }

    request.streamKey = defaultStreamKey;

    return true;
  }
}
