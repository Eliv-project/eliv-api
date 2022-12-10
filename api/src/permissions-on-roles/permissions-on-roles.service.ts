import { Injectable } from '@nestjs/common';
import { CreatePermissionsOnRoleInput } from './dto/create-permissions-on-role.input';
import { UpdatePermissionsOnRoleInput } from './dto/update-permissions-on-role.input';

@Injectable()
export class PermissionsOnRolesService {
  create(createPermissionsOnRoleInput: CreatePermissionsOnRoleInput) {
    return 'This action adds a new permissionsOnRole';
  }

  findAll() {
    return `This action returns all permissionsOnRoles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permissionsOnRole`;
  }

  update(id: number, updatePermissionsOnRoleInput: UpdatePermissionsOnRoleInput) {
    return `This action updates a #${id} permissionsOnRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} permissionsOnRole`;
  }
}
