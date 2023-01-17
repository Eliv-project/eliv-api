import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/prisma/@generated/comment/comment.model';
import { Vote } from 'src/prisma/@generated/vote/vote.model';

@ObjectType()
export class CommentWithVotes extends Comment {
  @Field(() => Int)
  likes: number;

  @Field(() => Int)
  dislikes: number;

  @Field(() => Vote, { nullable: true })
  myVote?: Vote;
}
