import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class StreamKeysService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.StreamKeyCreateInput) {
    return this.prisma.streamKey.create({ data });
  }

  findAll(
    where: Prisma.StreamKeyWhereInput,
    include?: Prisma.StreamKeyInclude,
  ) {
    return this.prisma.streamKey.findMany({ where, include });
  }

  findOne(
    where: Prisma.StreamKeyWhereUniqueInput,
    include?: Prisma.StreamKeyInclude,
  ) {
    return this.prisma.streamKey.findUnique({ where, include });
  }

  findFirst(where: Prisma.StreamKeyWhereInput) {
    return this.prisma.streamKey.findFirst({ where });
  }

  update(
    where: Prisma.StreamKeyWhereUniqueInput,
    data: Prisma.StreamKeyUpdateInput,
  ) {
    return this.prisma.streamKey.update({ where, data });
  }

  remove(where: Prisma.StreamKeyWhereUniqueInput) {
    return this.prisma.streamKey.delete({ where });
  }
}
