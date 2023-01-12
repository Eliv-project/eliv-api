import { Module } from '@nestjs/common';
import { UserSubscriptionsService } from './user-subscriptions.service';
import { UserSubscriptionsResolver } from './user-subscriptions.resolver';

@Module({
  providers: [UserSubscriptionsResolver, UserSubscriptionsService]
})
export class UserSubscriptionsModule {}
