import { Field, Int } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VoteCountResponse {
  @Field(() => Int)
  likes: number;

  @Field(() => Int)
  dislikes: number;
}
