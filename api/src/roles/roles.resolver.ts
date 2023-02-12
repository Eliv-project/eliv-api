import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoleCreateInput } from 'src/prisma/@generated/role/role-create.input';
import { Prisma } from '@prisma/client';
import { RoleUpdateInput } from 'src/prisma/@generated/role/role-update.input';
import { RoleWhereUniqueInput } from 'src/prisma/@generated/role/role-where-unique.input';
import { RoleWhereInput } from 'src/prisma/@generated/role/role-where.input';
import { Role } from 'src/prisma/@generated/role/role.model';
import { RolesService } from './roles.service';

@Resolver(() => Role)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Mutation(() => Role)
  createRole(
    @Args('data')
    data: RoleCreateInput,
  ) {
    return this.rolesService.create(data as Prisma.RoleCreateInput);
  }

  @Query(() => [Role], { name: 'roles' })
  findAll(
    @Args('where')
    where: RoleWhereInput,
  ) {
    return this.rolesService.findAll(where);
  }

  @Query(() => Role, { name: 'role' })
  findOne(@Args('where') where: RoleWhereUniqueInput) {
    return this.rolesService.findOne(where);
  }

  @Mutation(() => Role)
  updateRole(
    @Args('where') where: RoleWhereUniqueInput,
    @Args('data')
    data: RoleUpdateInput,
  ) {
    return this.rolesService.update(where, data as Prisma.RoleUpdateInput);
  }

  @Mutation(() => Role)
  removeRole(@Args('where') where: RoleWhereUniqueInput) {
    return this.rolesService.remove(where);
  }
}
