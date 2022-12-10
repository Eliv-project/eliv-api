import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PermissionsOnRolesService } from './permissions-on-roles.service';
import { PermissionsOnRole } from './entities/permissions-on-role.entity';
import { CreatePermissionsOnRoleInput } from './dto/create-permissions-on-role.input';
import { UpdatePermissionsOnRoleInput } from './dto/update-permissions-on-role.input';

@Resolver(() => PermissionsOnRole)
export class PermissionsOnRolesResolver {
  constructor(private readonly permissionsOnRolesService: PermissionsOnRolesService) {}

  @Mutation(() => PermissionsOnRole)
  createPermissionsOnRole(@Args('createPermissionsOnRoleInput') createPermissionsOnRoleInput: CreatePermissionsOnRoleInput) {
    return this.permissionsOnRolesService.create(createPermissionsOnRoleInput);
  }

  @Query(() => [PermissionsOnRole], { name: 'permissionsOnRoles' })
  findAll() {
    return this.permissionsOnRolesService.findAll();
  }

  @Query(() => PermissionsOnRole, { name: 'permissionsOnRole' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.permissionsOnRolesService.findOne(id);
  }

  @Mutation(() => PermissionsOnRole)
  updatePermissionsOnRole(@Args('updatePermissionsOnRoleInput') updatePermissionsOnRoleInput: UpdatePermissionsOnRoleInput) {
    return this.permissionsOnRolesService.update(updatePermissionsOnRoleInput.id, updatePermissionsOnRoleInput);
  }

  @Mutation(() => PermissionsOnRole)
  removePermissionsOnRole(@Args('id', { type: () => Int }) id: number) {
    return this.permissionsOnRolesService.remove(id);
  }
}
