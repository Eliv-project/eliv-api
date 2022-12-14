import { Injectable } from '@nestjs/common';
import { PermissionCreateInput } from 'src/prisma/@generated/permission/permission-create.input';
import { PermissionUpdateInput } from 'src/prisma/@generated/permission/permission-update.input';
import { PermissionWhereUniqueInput } from 'src/prisma/@generated/permission/permission-where-unique.input';
import { PermissionWhereInput } from 'src/prisma/@generated/permission/permission-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  create(data: PermissionCreateInput) {
    return this.prisma.permission.create({ data });
  }

  findAll(where: PermissionWhereInput) {
    return this.prisma.permission.findMany({ where });
  }

  findOne(where: PermissionWhereUniqueInput) {
    return this.prisma.permission.findUnique({ where });
  }

  update(where: PermissionWhereUniqueInput, data: PermissionUpdateInput) {
    return this.prisma.permission.update({
      where,
      data,
    });
  }

  remove(where: PermissionWhereUniqueInput) {
    return this.prisma.permission.delete({ where });
  }
}
