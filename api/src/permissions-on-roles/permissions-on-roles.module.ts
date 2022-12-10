import { Module } from '@nestjs/common';
import { PermissionsOnRolesService } from './permissions-on-roles.service';
import { PermissionsOnRolesResolver } from './permissions-on-roles.resolver';

@Module({
  providers: [PermissionsOnRolesResolver, PermissionsOnRolesService]
})
export class PermissionsOnRolesModule {}
