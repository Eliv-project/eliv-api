import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';
import { User } from 'src/prisma/@generated/user/user.model';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
import { VoteWhereInput } from 'src/prisma/@generated/vote/vote-where.input';
import { Vote } from 'src/prisma/@generated/vote/vote.model';
import { VideosService } from 'src/videos/videos.service';
import { VoteResponse } from './dto/vote-response.dto';
import { VotesService } from './votes.service';

@Resolver(() => Vote)
export class VotesResolver {
  constructor(
    private readonly votesService: VotesService,
    private readonly videosService: VideosService,
  ) {}

  @Query(() => Int)
  @IsPublic()
  countVote(@Args('where') where: VoteWhereInput) {
    return this.votesService.count(where);
  }

  @Query(() => VoteResponse)
  async isVoted(
    @CurrentUser() me,
    @Args('video') videoWhere: VideoWhereUniqueInput,
  ): Promise<VoteResponse> {
    // Get video
    const video = await this.videosService.findOne(videoWhere);
    if (!video) {
      throw new NotFoundException('VIDEO_NOT_FOUND');
    }

    // Get prev vote (if any)
    const prevVote = await this.votesService.findFirst({
      videoId: { equals: video.id },
      userId: { equals: me.id },
    });

    return {
      status: !!prevVote,
      vote: prevVote,
    };
  }

  @Mutation(() => VoteResponse)
  async voteVideo(
    @Args('video') videoWhere: VideoWhereUniqueInput,
    @Args('direction', { type: () => Int }) voteDirection: number,
    @CurrentUser() me: User,
  ): Promise<VoteResponse> {
    // Get video
    const video = await this.videosService.findOne(videoWhere);
    if (!video) {
      throw new NotFoundException('VIDEO_NOT_FOUND');
    }

    // Get prev vote
    const prevVote = await this.votesService.findFirst({
      videoId: { equals: video.id },
      userId: { equals: me.id },
    });

    // If prev vote not existed, create one
    if (!prevVote) {
      return {
        status: true,
        vote: await this.votesService.create({
          user: {
            connect: {
              username: me.username,
            },
          },
          voteDirection,
          video: {
            connect: {
              slug: video.slug,
            },
          },
        }),
      };
    }

    // If prev vote existed, update/remove it
    // If user unvote, remove it
    if (prevVote.voteDirection / voteDirection > 0) {
      await this.votesService.remove({ id: prevVote.id });
      return { status: false };
    }
    // If user vote in other direction, update it
    else {
      return {
        status: true,
        vote: await this.votesService.update(
          { id: prevVote.id },
          { voteDirection: { set: voteDirection } },
        ),
      };
    }
  }
}
