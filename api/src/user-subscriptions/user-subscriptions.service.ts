import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserSubscriptionsService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: Prisma.UserSubscriptionCreateInput) {
    return this.prisma.userSubscription.create({ data });
  }

  count(where: Prisma.UserSubscriptionWhereInput) {
    return this.prisma.userSubscription.count({ where });
  }

  findAll(args: Prisma.UserSubscriptionFindManyArgs) {
    return this.prisma.userSubscription.findMany(args);
  }

  findOne(
    where: Prisma.UserSubscriptionWhereUniqueInput,
    include?: Prisma.UserSubscriptionInclude,
  ) {
    return this.prisma.userSubscription.findUnique({ where, include });
  }

  findFirst(where: Prisma.UserSubscriptionWhereInput) {
    return this.prisma.userSubscription.findFirst({ where });
  }

  update(
    where: Prisma.UserSubscriptionWhereUniqueInput,
    data: Prisma.UserSubscriptionUpdateInput,
  ) {
    return this.prisma.userSubscription.update({ where, data });
  }

  remove(where: Prisma.UserSubscriptionWhereUniqueInput) {
    return this.prisma.userSubscription.delete({ where });
  }
}
