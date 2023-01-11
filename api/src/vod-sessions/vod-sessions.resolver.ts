import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VodSessionsService } from './vod-sessions.service';
import { CreateVodSessionInput } from './dto/create-vod-session.input';
import { UpdateVodSessionInput } from './dto/update-vod-session.input';
import { VodSession } from 'src/prisma/@generated/vod-session/vod-session.model';

@Resolver(() => VodSession)
export class VodSessionsResolver {
  constructor(private readonly vodSessionsService: VodSessionsService) {}

  @Mutation(() => VodSession)
  createVodSession(@Args('createVodSessionInput') createVodSessionInput: CreateVodSessionInput) {
    return this.vodSessionsService.create(createVodSessionInput);
  }

  @Query(() => [VodSession], { name: 'vodSessions' })
  findAll() {
    return this.vodSessionsService.findAll();
  }

  @Query(() => VodSession, { name: 'vodSession' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.vodSessionsService.findOne(id);
  }

  @Mutation(() => VodSession)
  updateVodSession(@Args('updateVodSessionInput') updateVodSessionInput: UpdateVodSessionInput) {
    return this.vodSessionsService.update(updateVodSessionInput.id, updateVodSessionInput);
  }

  @Mutation(() => VodSession)
  removeVodSession(@Args('id', { type: () => Int }) id: number) {
    return this.vodSessionsService.remove(id);
  }
}
