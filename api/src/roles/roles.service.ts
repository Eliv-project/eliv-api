import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.RoleCreateInput) {
    return this.prisma.role.create({ data });
  }

  findAll(where: Prisma.RoleWhereInput) {
    return this.prisma.role.findMany({ where });
  }

  findOne(where: Prisma.RoleWhereUniqueInput) {
    return this.prisma.role.findUnique({ where });
  }

  update(where: Prisma.RoleWhereUniqueInput, data: Prisma.RoleUpdateInput) {
    return this.prisma.role.update({
      where,
      data,
    });
  }

  remove(where: Prisma.RoleWhereUniqueInput) {
    return this.prisma.role.delete({ where });
  }
}
