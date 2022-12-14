import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LiveSessionsService } from './live-sessions.service';
import { LiveSessionCreateInput } from 'src/prisma/@generated/live-session/live-session-create.input';
import { LiveSession } from 'src/prisma/@generated/live-session/live-session.model';
import { LiveSessionUpdateInput } from 'src/prisma/@generated/live-session/live-session-update.input';
import { LiveSessionWhereUniqueInput } from 'src/prisma/@generated/live-session/live-session-where-unique.input';
import { LiveSessionWhereInput } from 'src/prisma/@generated/live-session/live-session-where.input';

@Resolver(() => LiveSession)
export class LiveSessionsResolver {
  constructor(private readonly liveSessionsService: LiveSessionsService) {}

  @Mutation(() => LiveSession)
  createLiveSession(
    @Args('data')
    data: LiveSessionCreateInput,
  ) {
    return this.liveSessionsService.create(data);
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
