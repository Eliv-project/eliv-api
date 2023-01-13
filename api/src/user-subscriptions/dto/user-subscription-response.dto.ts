import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSubscriptionResponse {
  @Field(() => Boolean, { nullable: false })
  status: boolean;
}
