import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LiveSessionsService } from './live-sessions.service';
import { LiveSession } from './entities/live-session.entity';
import { CreateLiveSessionInput } from './dto/create-live-session.input';
import { UpdateLiveSessionInput } from './dto/update-live-session.input';
import { Prisma } from '@prisma/client';

@Resolver(() => LiveSession)
export class LiveSessionsResolver {
  constructor(private readonly liveSessionsService: LiveSessionsService) {}

  @Mutation(() => LiveSession)
  createLiveSession(
    @Args() createLiveSessionInput: Prisma.LiveSessionCreateInput,
  ) {
    return this.liveSessionsService.create(createLiveSessionInput);
  }

  @Query(() => [LiveSession], { name: 'liveSessions' })
  findAll() {
    return this.liveSessionsService.findAll();
  }

  @Query(() => LiveSession, { name: 'liveSession' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.liveSessionsService.findOne(id);
  }

  @Mutation(() => LiveSession)
  updateLiveSession(
    @Args('updateLiveSessionInput')
    updateLiveSessionInput: UpdateLiveSessionInput,
  ) {
    return this.liveSessionsService.update(
      updateLiveSessionInput.id,
      updateLiveSessionInput,
    );
  }

  @Mutation(() => LiveSession)
  removeLiveSession(@Args('id', { type: () => Int }) id: number) {
    return this.liveSessionsService.remove(id);
  }
}
