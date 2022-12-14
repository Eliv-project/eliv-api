import { Module } from '@nestjs/common';
import { PermissionsOnRolesService } from './permissions-on-roles.service';
import { PermissionsOnRolesResolver } from './permissions-on-roles.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [
    PermissionsOnRolesResolver,
    PermissionsOnRolesService,
    PrismaService,
  ],
})
export class PermissionsOnRolesModule {}
