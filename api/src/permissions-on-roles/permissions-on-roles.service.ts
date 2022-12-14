import { Injectable } from '@nestjs/common';
import { PermissionsOnRolesCreateInput } from 'src/prisma/@generated/permissions-on-roles/permissions-on-roles-create.input';
import { PermissionsOnRolesUpdateInput } from 'src/prisma/@generated/permissions-on-roles/permissions-on-roles-update.input';
import { PermissionsOnRolesWhereUniqueInput } from 'src/prisma/@generated/permissions-on-roles/permissions-on-roles-where-unique.input';
import { PermissionsOnRolesWhereInput } from 'src/prisma/@generated/permissions-on-roles/permissions-on-roles-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionsOnRolesService {
  constructor(private prisma: PrismaService) {}

  create(data: PermissionsOnRolesCreateInput) {
    return this.prisma.permissionsOnRoles.create({ data });
  }

  findAll(where: PermissionsOnRolesWhereInput) {
    return this.prisma.permissionsOnRoles.findMany({ where });
  }

  findOne(where: PermissionsOnRolesWhereUniqueInput) {
    return this.prisma.permissionsOnRoles.findUnique({ where });
  }

  update(
    where: PermissionsOnRolesWhereUniqueInput,
    data: PermissionsOnRolesUpdateInput,
  ) {
    return this.prisma.permissionsOnRoles.update({
      where,
      data,
    });
  }

  remove(where: PermissionsOnRolesWhereUniqueInput) {
    return this.prisma.permissionsOnRoles.delete({ where });
  }
}
