import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VoteCreateInput } from 'src/prisma/@generated/vote/vote-create.input';
import { VoteWhereInput } from 'src/prisma/@generated/vote/vote-where.input';
import { Vote } from 'src/prisma/@generated/vote/vote.model';
import { VotesService } from './votes.service';

@Resolver(() => Vote)
export class VotesResolver {
  constructor(private readonly votesService: VotesService) {}

  @Mutation(() => Vote)
  async vote(
    @Args('where') where: VoteWhereInput,
    @Args('data') data: VoteCreateInput,
  ) {
    // Get prev vote
    const prevVote = await this.votesService.findFirst(where);

    // If prev vote not existed, create one
    if (!prevVote) {
      return this.votesService.create(data);
    }

    // If prev vote existed, update/remove it
    // If user unvote, remove it
    if (prevVote.voteDirection / data.voteDirection > 0) {
      return this.votesService.remove({ id: prevVote.id });
    }
    // If user vote in other direction, update it
    else {
      return this.votesService.update(
        { id: prevVote.id },
        { voteDirection: { set: data.voteDirection } },
      );
    }
  }
}
