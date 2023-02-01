import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserCreateInput } from 'src/prisma/@generated/user/user-create.input';
import { UserUpdateInput } from 'src/prisma/@generated/user/user-update.input';
import { UserWhereUniqueInput } from 'src/prisma/@generated/user/user-where-unique.input';
import { UserWhereInput } from 'src/prisma/@generated/user/user-where.input';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create({ password, ...inputData }: UserCreateInput) {
    return this.prisma.user.create({
      data: {
        password: bcrypt.hashSync(password, 10),
        ...inputData,
      },
    });
  }

  findAll(where: UserWhereInput) {
    return this.prisma.user.findMany({ where });
  }

  findOne(where: UserWhereUniqueInput, include?: Prisma.UserInclude) {
    return this.prisma.user.findUnique({ where, include });
  }

  count(where: UserWhereInput) {
    return this.prisma.user.count({ where });
  }

  update(where: UserWhereUniqueInput, data: UserUpdateInput) {
    return this.prisma.user.update({
      where,
      data,
    });
  }

  remove(where: UserWhereUniqueInput) {
    return this.prisma.user.delete({ where });
  }
}
