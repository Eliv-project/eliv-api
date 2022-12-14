import { Injectable } from '@nestjs/common';
import { RoleCreateInput } from 'src/prisma/@generated/role/role-create.input';
import { RoleUpdateInput } from 'src/prisma/@generated/role/role-update.input';
import { RoleWhereUniqueInput } from 'src/prisma/@generated/role/role-where-unique.input';
import { RoleWhereInput } from 'src/prisma/@generated/role/role-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  create(data: RoleCreateInput) {
    return this.prisma.role.create({ data });
  }

  findAll(where: RoleWhereInput) {
    return this.prisma.role.findMany({ where });
  }

  findOne(where: RoleWhereUniqueInput) {
    return this.prisma.role.findUnique({ where });
  }

  update(where: RoleWhereUniqueInput, data: RoleUpdateInput) {
    return this.prisma.role.update({
      where,
      data,
    });
  }

  remove(where: RoleWhereUniqueInput) {
    return this.prisma.role.delete({ where });
  }
}
