import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserSubscriptionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
