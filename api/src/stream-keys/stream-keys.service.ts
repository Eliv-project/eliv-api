import { Injectable } from '@nestjs/common';
import { StreamKeyCreateInput } from 'src/prisma/@generated/stream-key/stream-key-create.input';
import { StreamKeyWhereInput } from 'src/prisma/@generated/stream-key/stream-key-where.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { StreamKeyWhereUniqueInput } from 'src/prisma/@generated/stream-key/stream-key-where-unique.input';
import { StreamKeyUpdateInput } from 'src/prisma/@generated/stream-key/stream-key-update.input';

@Injectable()
export class StreamKeysService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: StreamKeyCreateInput) {
    return this.prisma.streamKey.create({ data });
  }

  findAll(where: StreamKeyWhereInput, include?: Prisma.StreamKeyInclude) {
    return this.prisma.streamKey.findMany({ where, include });
  }

  findOne(where: StreamKeyWhereUniqueInput, include?: Prisma.StreamKeyInclude) {
    return this.prisma.streamKey.findUnique({ where, include });
  }

  findFirst(where: StreamKeyWhereInput) {
    return this.prisma.streamKey.findFirst({ where });
  }

  update(where: StreamKeyWhereUniqueInput, data: StreamKeyUpdateInput) {
    return this.prisma.streamKey.update({ where, data });
  }

  remove(where: StreamKeyWhereUniqueInput) {
    return this.prisma.streamKey.delete({ where });
  }
}
