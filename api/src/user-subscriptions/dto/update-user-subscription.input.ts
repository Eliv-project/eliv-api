import { CreateUserSubscriptionInput } from './create-user-subscription.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserSubscriptionInput extends PartialType(CreateUserSubscriptionInput) {
  @Field(() => Int)
  id: number;
}
