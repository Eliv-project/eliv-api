import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LiveSessionsService } from './live-sessions.service';
import { LiveSessionCreateInput } from 'src/prisma/@generated/live-session/live-session-create.input';
import { LiveSession } from 'src/prisma/@generated/live-session/live-session.model';
import { LiveSessionUpdateInput } from 'src/prisma/@generated/live-session/live-session-update.input';
import { LiveSessionWhereUniqueInput } from 'src/prisma/@generated/live-session/live-session-where-unique.input';
import { LiveSessionWhereInput } from 'src/prisma/@generated/live-session/live-session-where.input';
import { VideosService } from 'src/videos/videos.service';
import { randomUUID } from 'crypto';
import { VideoPrivacy } from 'src/videos/enums/privacy.enum';
import { LiveStatus } from './enums/status.enum';
import { UseGuards } from '@nestjs/common';
import { WithStreamKey } from './guards/with-stream-key.guard';
import { CurrentStreamKey } from './decorators/current-stream-key.decorator';
import { StreamKey } from 'src/prisma/@generated/stream-key/stream-key.model';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/prisma/@generated/user/user.model';

@Resolver(() => LiveSession)
export class LiveSessionsResolver {
  constructor(
    private readonly liveSessionsService: LiveSessionsService,
    private readonly videosService: VideosService,
  ) {}

  @Mutation(() => LiveSession)
  @UseGuards(WithStreamKey)
  async createLiveSession(
    @Args('data')
    data: LiveSessionCreateInput,
    @CurrentStreamKey()
    myStreamKey: StreamKey,
    @CurrentUser()
    me: User,
  ) {
    const dirId = randomUUID();
    return this.liveSessionsService.create(
      {
        ...data,
        status: LiveStatus.OFFLINE,
        streamKey: {
          connect: {
            id: myStreamKey.id,
          },
        },
        video: {
          create: {
            ...data.video.create,
            dirId,
            privacy: VideoPrivacy.private,
            searchableName: this.videosService.getSearchableName(
              data.video.create.name,
            ),
            slug: this.videosService.getSlug(),
            user: {
              connect: {
                id: me.id,
              },
            },
          },
        },
      },
      {
        video: true,
      },
    );
  }

  @Query(() => [LiveSession], { name: 'liveSessions' })
  findAll(
    @Args('where')
    where: LiveSessionWhereInput,
  ) {
    return this.liveSessionsService.findAll(where);
  }

  @Query(() => LiveSession, { name: 'liveSession' })
  findOne(@Args('where') where: LiveSessionWhereUniqueInput) {
    return this.liveSessionsService.findOne(where);
  }

  @Mutation(() => LiveSession)
  updateLiveSession(
    @Args('where') where: LiveSessionWhereUniqueInput,
    @Args('data')
    data: LiveSessionUpdateInput,
  ) {
    return this.liveSessionsService.update(where, data);
  }

  @Mutation(() => LiveSession)
  removeLiveSession(@Args('where') where: LiveSessionWhereUniqueInput) {
    return this.liveSessionsService.remove(where);
  }
}
