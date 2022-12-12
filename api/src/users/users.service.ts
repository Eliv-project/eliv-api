import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll(where: Prisma.UserWhereInput) {
    return this.prisma.user.findMany({
      where,
      include: {
        role: true,
        oauthLinks: true,
      },
    });
  }

  findOne(where: Prisma.UserWhereInput, include?: Prisma.UserInclude) {
    return this.prisma.user.findFirst({
      where,
      include,
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
