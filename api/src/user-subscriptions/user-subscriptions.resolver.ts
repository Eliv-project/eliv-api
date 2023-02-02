import { BadRequestException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { UserSubscription } from 'src/prisma/@generated/user-subscription/user-subscription.model';
import { UserWhereUniqueInput } from 'src/prisma/@generated/user/user-where-unique.input';
import { User } from 'src/prisma/@generated/user/user.model';
import { UsersService } from 'src/users/users.service';
import { UserSubscriptionResponse } from './dto/user-subscription-response.dto';
import { UserSubscriptionsService } from './user-subscriptions.service';

@Resolver(() => UserSubscription)
export class UserSubscriptionsResolver {
  constructor(
    private readonly userSubscriptionsService: UserSubscriptionsService,
    private readonly usersService: UsersService,
  ) {}

  @Query(() => Int)
  @IsPublic()
  countSubscriber(@Args('where') userWhere: UserWhereUniqueInput) {
    return this.userSubscriptionsService.count({
      subscribingUser: {
        is: {
          OR: [
            userWhere.username && { username: { equals: userWhere.username } },
            userWhere.email && { email: { equals: userWhere.email } },
            userWhere.id && { id: { equals: userWhere.id } },
          ].filter((i) => !!i),
        },
      },
    });
  }

  @Query(() => [UserSubscription], { name: 'userSubscriptions' })
  userSubscriptions(@CurrentUser() me: User) {
    return this.userSubscriptionsService.findAll(
      {
        userId: { equals: me.id },
      },
      { subscribingUser: true },
    );
  }

  @Query(() => Boolean)
  async isSubscribing(
    @Args('user') userWhere: UserWhereUniqueInput,
    @CurrentUser() me: User,
  ): Promise<boolean> {
    const subscribingUser = await this.usersService.findOne(userWhere);
    if (!subscribingUser) {
      throw new NotFoundException('USER_NOT_FOUND');
    }

    const subscription = await this.userSubscriptionsService.findFirst({
      subscribingUser: {
        is: {
          id: { equals: subscribingUser.id },
        },
      },
      userId: { equals: me.id },
    });
    return !!subscription;
  }

  @Mutation(() => UserSubscriptionResponse)
  async subscribe(
    @Args('user') userWhere: UserWhereUniqueInput,
    @CurrentUser() me: User,
  ): Promise<UserSubscriptionResponse> {
    // Prevent user from subscribing themselve
    const subscribingUser = await this.usersService.findOne(userWhere);
    if (subscribingUser.id === me.id) {
      throw new BadRequestException('CANNOT_SELF_SUBSCRIBE');
    }

    const prevSubscription = await this.userSubscriptionsService.findFirst({
      subscribingUser: {
        is: { username: { equals: subscribingUser.username } },
      },
      user: { is: { username: { equals: me.username } } },
    });

    // If subscription not exisited, create one
    if (!prevSubscription) {
      await this.userSubscriptionsService.create({
        user: {
          connect: {
            username: me.username,
          },
        },
        subscribingUser: {
          connect: {
            username: subscribingUser.username,
          },
        },
      });
      return {
        status: true,
      };
    }

    // If subscription existed, remove (unsubscribe) it
    await this.userSubscriptionsService.remove({
      userId_subscribingUserId: {
        userId: prevSubscription.userId,
        subscribingUserId: prevSubscription.subscribingUserId,
      },
    });
    return { status: false };
  }
}
