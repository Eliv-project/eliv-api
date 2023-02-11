import { BadRequestException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { UserCreateInput } from 'src/prisma/@generated/user/user-create.input';
import { UserOrderByWithRelationInput } from 'src/prisma/@generated/user/user-order-by-with-relation.input';
import { UserUpdateInput } from 'src/prisma/@generated/user/user-update.input';
import { UserWhereUniqueInput } from 'src/prisma/@generated/user/user-where-unique.input';
import { UserWhereInput } from 'src/prisma/@generated/user/user-where.input';
import { User } from 'src/prisma/@generated/user/user.model';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(
    @Args('data')
    data: UserCreateInput,
  ) {
    return this.usersService.create(data);
  }

  @Query(() => [User], { name: 'users' })
  @IsPublic()
  findAll(
    @Args('where')
    where: UserWhereInput,
    @Args('orderBy', {
      nullable: true,
      type: () => [UserOrderByWithRelationInput],
    })
    orderBy: UserOrderByWithRelationInput[],
    @Args('take', { nullable: true, type: () => Int })
    take: number,
  ) {
    return this.usersService.findAll({
      where,
      orderBy,
      take,
      include: { _count: { select: { subscribers: true } } },
    });
  }

  @Query(() => User, { name: 'user' })
  @IsPublic()
  findOne(@Args('where') where: UserWhereUniqueInput) {
    return this.usersService.findOne(where);
  }

  @Mutation(() => Boolean, { name: 'changePassword' })
  async changePassword(
    @Args('oldPassword') oldPassword: string,
    @Args('newPassword') newPassword: string,
    @CurrentUser() me: User,
  ) {
    if (me.verified) {
      const matched = bcrypt.compareSync(oldPassword, me.password);
      if (!matched) {
        throw new BadRequestException('INCORRECT_PASSWORD');
      }
    }
    const newHashedPassword = bcrypt.hashSync(newPassword, 10);
    await this.usersService.update(
      { id: me.id },
      { password: { set: newHashedPassword } },
    );
    return true;
  }

  @Mutation(() => User)
  async updateUser(
    @CurrentUser() me: User,
    @Args('data')
    data: UserUpdateInput,
  ) {
    if (data.username) {
      const userExited =
        (await this.usersService.count({
          username: { mode: 'insensitive', equals: data.username.set },
        })) > 0;
      if (userExited) {
        throw new BadRequestException('USERNAME_EXISTED');
      }
    }

    if (data.password) {
      data.password.set = bcrypt.hashSync(data.password.set, 10);
    }

    return this.usersService.update({ id: me.id }, data);
  }

  @Mutation(() => User)
  removeUser(@Args('where') where: UserWhereUniqueInput) {
    return this.usersService.remove(where);
  }
}
