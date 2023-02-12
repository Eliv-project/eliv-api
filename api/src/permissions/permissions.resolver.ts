import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PermissionCreateInput } from 'src/prisma/@generated/permission/permission-create.input';
import { PermissionUpdateInput } from 'src/prisma/@generated/permission/permission-update.input';
import { PermissionWhereUniqueInput } from 'src/prisma/@generated/permission/permission-where-unique.input';
import { PermissionWhereInput } from 'src/prisma/@generated/permission/permission-where.input';
import { Permission } from 'src/prisma/@generated/permission/permission.model';
import { PermissionsService } from './permissions.service';
import { Prisma } from '@prisma/client';

@Resolver(() => Permission)
export class PermissionsResolver {
  constructor(private readonly permissionsService: PermissionsService) {}

  // @Mutation(() => Permission)
  // createPermission(
  //   @Args('data')
  //   data: PermissionCreateInput,
  // ) {
  //   return this.permissionsService.create(data as Prisma.PermissionCreateInput);
  // }

  @Query(() => [Permission], { name: 'permissions' })
  findAll(
    @Args('where')
    where: PermissionWhereInput,
  ) {
    return this.permissionsService.findAll(where);
  }

  @Query(() => Permission, { name: 'permission' })
  findOne(@Args('where') where: PermissionWhereUniqueInput) {
    return this.permissionsService.findOne(where);
  }

  @Mutation(() => Permission)
  updatePermission(
    @Args('where') where: PermissionWhereUniqueInput,
    @Args('data')
    data: PermissionUpdateInput,
  ) {
    return this.permissionsService.update(
      where,
      data as Prisma.PermissionUpdateInput,
    );
  }

  @Mutation(() => Permission)
  removePermission(@Args('where') where: PermissionWhereUniqueInput) {
    return this.permissionsService.remove(where);
  }
}
