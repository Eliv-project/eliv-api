import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VodSessionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(
    data: Prisma.VodSessionCreateInput,
    include?: Prisma.VodSessionInclude,
  ) {
    return this.prisma.vodSession.create({ data, include });
  }

  findAll(args: Prisma.VodSessionFindManyArgs) {
    return this.prisma.vodSession.findMany(args);
  }

  findOne(args: Prisma.VodSessionFindUniqueArgs) {
    return this.prisma.vodSession.findUnique(args);
  }

  update(
    where: Prisma.VodSessionWhereUniqueInput,
    data: Prisma.VodSessionUpdateInput,
  ) {
    return this.prisma.vodSession.update({ where, data });
  }

  remove(where: Prisma.VodSessionWhereUniqueInput) {
    return this.prisma.vodSession.delete({ where });
  }
}
