import { Injectable } from '@nestjs/common';
import { UserSubscriptionCreateInput } from 'src/prisma/@generated/user-subscription/user-subscription-create.input';
import { UserSubscriptionWhereUniqueInput } from 'src/prisma/@generated/user-subscription/user-subscription-where-unique.input';
import { UserSubscriptionWhereInput } from 'src/prisma/@generated/user-subscription/user-subscription-where.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UserSubscriptionUpdateInput } from 'src/prisma/@generated/user-subscription/user-subscription-update.input';

@Injectable()
export class UserSubscriptionsService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: UserSubscriptionCreateInput) {
    return this.prisma.userSubscription.create({ data });
  }

  count(where: UserSubscriptionWhereInput) {
    return this.prisma.userSubscription.count({ where });
  }

  findAll(args: Prisma.UserSubscriptionFindManyArgs) {
    return this.prisma.userSubscription.findMany(args);
  }

  findOne(
    where: UserSubscriptionWhereUniqueInput,
    include?: Prisma.UserSubscriptionInclude,
  ) {
    return this.prisma.userSubscription.findUnique({ where, include });
  }

  findFirst(where: UserSubscriptionWhereInput) {
    return this.prisma.userSubscription.findFirst({ where });
  }

  update(
    where: UserSubscriptionWhereUniqueInput,
    data: UserSubscriptionUpdateInput,
  ) {
    return this.prisma.userSubscription.update({ where, data });
  }

  remove(where: UserSubscriptionWhereUniqueInput) {
    return this.prisma.userSubscription.delete({ where });
  }
}
