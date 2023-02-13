import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ViewersService {
  constructor(private readonly prisma: PrismaService) {}

  create(args: Prisma.ViewerCreateArgs) {
    return this.prisma.viewer.create(args);
  }

  // findAll() {
  //   return `This action returns all viewers`;
  // }

  findOne(args: Prisma.ViewerFindUniqueArgs) {
    return this.prisma.viewer.findUnique(args);
  }

  findFirst(args: Prisma.ViewerFindFirstArgs) {
    return this.prisma.viewer.findFirst(args);
  }

  count(args: Prisma.ViewerCountArgs) {
    return this.prisma.viewer.count(args);
  }

  update(args: Prisma.ViewerUpdateArgs) {
    return this.prisma.viewer.update(args);
  }

  remove(args: Prisma.ViewerDeleteArgs) {
    return this.prisma.viewer.delete(args);
  }
}
