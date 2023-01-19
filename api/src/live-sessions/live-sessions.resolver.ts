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

@Resolver(() => LiveSession)
export class LiveSessionsResolver {
  constructor(
    private readonly liveSessionsService: LiveSessionsService,
    private readonly videosService: VideosService,
  ) {}

  @Mutation(() => LiveSession)
  async createLiveSession(
    @Args('data')
    data: LiveSessionCreateInput,
  ) {
    const dirId = randomUUID();
    const streamKey = randomUUID();
    const createdVideo = await this.videosService.create({
      ...data.video.create,
      dirId,
      privacy: VideoPrivacy.private,
    });
    return this.liveSessionsService.create(
      {
        ...data,
        status: LiveStatus.OFFLINE,
        streamKey,
        video: {
          connect: {
            id: createdVideo.id,
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
