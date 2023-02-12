import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.PermissionCreateInput) {
    return this.prisma.permission.create({ data });
  }

  findAll(where: Prisma.PermissionWhereInput) {
    return this.prisma.permission.findMany({ where });
  }

  findOne(where: Prisma.PermissionWhereUniqueInput) {
    return this.prisma.permission.findUnique({ where });
  }

  update(
    where: Prisma.PermissionWhereUniqueInput,
    data: Prisma.PermissionUpdateInput,
  ) {
    return this.prisma.permission.update({
      where,
      data,
    });
  }

  remove(where: Prisma.PermissionWhereUniqueInput) {
    return this.prisma.permission.delete({ where });
  }
}
