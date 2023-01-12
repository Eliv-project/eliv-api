import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserSubscriptionsService } from './user-subscriptions.service';
import { UserSubscription } from './entities/user-subscription.entity';
import { CreateUserSubscriptionInput } from './dto/create-user-subscription.input';
import { UpdateUserSubscriptionInput } from './dto/update-user-subscription.input';

@Resolver(() => UserSubscription)
export class UserSubscriptionsResolver {
  constructor(private readonly userSubscriptionsService: UserSubscriptionsService) {}

  @Mutation(() => UserSubscription)
  createUserSubscription(@Args('createUserSubscriptionInput') createUserSubscriptionInput: CreateUserSubscriptionInput) {
    return this.userSubscriptionsService.create(createUserSubscriptionInput);
  }

  @Query(() => [UserSubscription], { name: 'userSubscriptions' })
  findAll() {
    return this.userSubscriptionsService.findAll();
  }

  @Query(() => UserSubscription, { name: 'userSubscription' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userSubscriptionsService.findOne(id);
  }

  @Mutation(() => UserSubscription)
  updateUserSubscription(@Args('updateUserSubscriptionInput') updateUserSubscriptionInput: UpdateUserSubscriptionInput) {
    return this.userSubscriptionsService.update(updateUserSubscriptionInput.id, updateUserSubscriptionInput);
  }

  @Mutation(() => UserSubscription)
  removeUserSubscription(@Args('id', { type: () => Int }) id: number) {
    return this.userSubscriptionsService.remove(id);
  }
}
