import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VodSessionsService } from './vod-sessions.service';
import { VodSession } from 'src/prisma/@generated/vod-session/vod-session.model';
import { VodSessionCreateInput } from 'src/prisma/@generated/vod-session/vod-session-create.input';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/prisma/@generated/user/user.model';
import { randomUUID } from 'crypto';
import { VodStatus } from './enums/status.enum';
import { VideoPrivacy } from 'src/videos/enums/privacy.enum';
import { Prisma } from '@prisma/client';

@Resolver(() => VodSession)
export class VodSessionsResolver {
  constructor(private readonly vodSessionsService: VodSessionsService) {}

  @Mutation(() => VodSession)
  async createVodSession(
    @Args('data')
    data: VodSessionCreateInput,
    @CurrentUser()
    me: User,
  ) {
    const dirId = randomUUID();
    return this.vodSessionsService.create(
      {
        ...data,
        status: VodStatus.empty,
        video: {
          create: {
            ...data.video.create,
            dirId,
            privacy: VideoPrivacy.private,
            user: {
              connect: {
                id: me.id,
              },
            },
          },
        },
      } as Prisma.VodSessionCreateInput,
      {
        video: true,
      },
    );
  }

  // @Query(() => [VodSession], { name: 'vodSessions' })
  // findAll() {
  //   return this.vodSessionsService.findAll();
  // }

  // @Query(() => VodSession, { name: 'vodSession' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.vodSessionsService.findOne(id);
  // }

  // @Mutation(() => VodSession)
  // updateVodSession(@Args('updateVodSessionInput') updateVodSessionInput: UpdateVodSessionInput) {
  //   return this.vodSessionsService.update(updateVodSessionInput.id, updateVodSessionInput);
  // }

  // @Mutation(() => VodSession)
  // removeVodSession(@Args('id', { type: () => Int }) id: number) {
  //   return this.vodSessionsService.remove(id);
  // }
}
