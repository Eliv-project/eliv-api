import { Injectable } from '@nestjs/common';
import { ViewCreateInput } from 'src/prisma/@generated/view/view-create.input';
import { ViewWhereInput } from 'src/prisma/@generated/view/view-where.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { ViewWhereUniqueInput } from 'src/prisma/@generated/view/view-where-unique.input';
import { ViewUpdateInput } from 'src/prisma/@generated/view/view-update.input';

@Injectable()
export class ViewsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: ViewCreateInput) {
    return this.prisma.view.create({ data });
  }

  findAll(where: ViewWhereInput, include?: Prisma.ViewInclude) {
    return this.prisma.view.findMany({ where, include });
  }

  findOne(where: ViewWhereUniqueInput, include?: Prisma.ViewInclude) {
    return this.prisma.view.findUnique({ where, include });
  }

  update(where: ViewWhereUniqueInput, data: ViewUpdateInput) {
    return this.prisma.view.update({ where, data });
  }

  remove(where: ViewWhereUniqueInput) {
    return this.prisma.view.delete({ where });
  }
}