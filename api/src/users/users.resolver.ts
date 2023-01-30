import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { UserCreateInput } from 'src/prisma/@generated/user/user-create.input';
import { UserUpdateInput } from 'src/prisma/@generated/user/user-update.input';
import { UserWhereUniqueInput } from 'src/prisma/@generated/user/user-where-unique.input';
import { UserWhereInput } from 'src/prisma/@generated/user/user-where.input';
import { User } from 'src/prisma/@generated/user/user.model';
import { UsersService } from './users.service';

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
  ) {
    return this.usersService.findAll(where);
  }

  @Query(() => User, { name: 'user' })
  @IsPublic()
  findOne(@Args('where') where: UserWhereUniqueInput) {
    return this.usersService.findOne(where);
  }

  @Mutation(() => User)
  updateUser(
    @Args('where') where: UserWhereUniqueInput,
    @Args('data')
    data: UserUpdateInput,
  ) {
    return this.usersService.update(where, data);
  }

  @Mutation(() => User)
  removeUser(@Args('where') where: UserWhereUniqueInput) {
    return this.usersService.remove(where);
  }
}
