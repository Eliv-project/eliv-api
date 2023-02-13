import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ViewsService {
  constructor(private readonly prisma: PrismaService) {}

  create(args: Prisma.ViewCreateArgs) {
    return this.prisma.view.create(args);
  }

  findFirst(args: Prisma.ViewFindFirstArgs) {
    return this.prisma.view.findFirst(args);
  }

  findAll(args: Prisma.ViewFindManyArgs) {
    return this.prisma.view.findMany(args);
  }

  findOne(where: Prisma.ViewWhereUniqueInput, include?: Prisma.ViewInclude) {
    return this.prisma.view.findUnique({ where, include });
  }

  update(where: Prisma.ViewWhereUniqueInput, data: Prisma.ViewUpdateInput) {
    return this.prisma.view.update({ where, data });
  }

  count(where: Prisma.ViewWhereInput) {
    return this.prisma.view.count({ where });
  }

  remove(where: Prisma.ViewWhereUniqueInput) {
    return this.prisma.view.delete({ where });
  }
}
