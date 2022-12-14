import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PermissionsOnRolesCreateInput } from 'src/prisma/@generated/permissions-on-roles/permissions-on-roles-create.input';
import { PermissionsOnRolesUpdateInput } from 'src/prisma/@generated/permissions-on-roles/permissions-on-roles-update.input';
import { PermissionsOnRolesWhereUniqueInput } from 'src/prisma/@generated/permissions-on-roles/permissions-on-roles-where-unique.input';
import { PermissionsOnRolesWhereInput } from 'src/prisma/@generated/permissions-on-roles/permissions-on-roles-where.input';
import { PermissionsOnRoles } from 'src/prisma/@generated/permissions-on-roles/permissions-on-roles.model';
import { PermissionsOnRolesService } from './permissions-on-roles.service';

@Resolver(() => PermissionsOnRoles)
export class PermissionsOnRolesResolver {
  constructor(
    private readonly permissionsOnRolessService: PermissionsOnRolesService,
  ) {}

  @Mutation(() => PermissionsOnRoles)
  createPermissionsOnRoles(
    @Args('data')
    data: PermissionsOnRolesCreateInput,
  ) {
    return this.permissionsOnRolessService.create(data);
  }

  @Query(() => [PermissionsOnRoles], { name: 'permissionsOnRoless' })
  findAll(
    @Args('where')
    where: PermissionsOnRolesWhereInput,
  ) {
    return this.permissionsOnRolessService.findAll(where);
  }

  @Query(() => PermissionsOnRoles, { name: 'permissionsOnRoles' })
  findOne(@Args('where') where: PermissionsOnRolesWhereUniqueInput) {
    return this.permissionsOnRolessService.findOne(where);
  }

  @Mutation(() => PermissionsOnRoles)
  updatePermissionsOnRoles(
    @Args('where') where: PermissionsOnRolesWhereUniqueInput,
    @Args('data')
    data: PermissionsOnRolesUpdateInput,
  ) {
    return this.permissionsOnRolessService.update(where, data);
  }

  @Mutation(() => PermissionsOnRoles)
  removePermissionsOnRoles(
    @Args('where') where: PermissionsOnRolesWhereUniqueInput,
  ) {
    return this.permissionsOnRolessService.remove(where);
  }
}
