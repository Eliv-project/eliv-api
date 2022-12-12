import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Prisma } from '@prisma/client';
import { GraphQLJSON } from 'graphql-scalars';
import { NeedPermissions } from 'src/permissions/decorators/need-permissions/need-permissions.decorator';
import Permissions from 'src/constants/permissions';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  @NeedPermissions(Permissions.user.read)
  async findAll() {
    return this.usersService.findAll({});
  }

  @Query(() => User, { name: 'user' })
  findOne(
    @Args('where', { type: () => GraphQLJSON }) where: Prisma.UserWhereInput,
  ) {
    return this.usersService.findOne(where);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
