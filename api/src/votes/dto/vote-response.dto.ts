import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Vote } from 'src/prisma/@generated/vote/vote.model';

@ObjectType()
export class VoteResponse {
  @Field(() => Boolean, { nullable: false })
  status: boolean;

  @Field(() => Vote, { nullable: true })
  vote?: Vote;
}
