import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserSubscription {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
