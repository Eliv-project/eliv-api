import { Module } from '@nestjs/common';
import { UserSubscriptionsService } from './user-subscriptions.service';
import { UserSubscriptionsResolver } from './user-subscriptions.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Module({
  providers: [
    UserSubscriptionsResolver,
    UserSubscriptionsService,
    PrismaService,
    UsersService,
  ],
})
export class UserSubscriptionsModule {}
