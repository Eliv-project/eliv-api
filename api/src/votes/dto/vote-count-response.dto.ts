import { Field, Int } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VoteCountResponse {
  @Field(() => Int)
  like: number;

  @Field(() => Int)
  dislike: number;
}
