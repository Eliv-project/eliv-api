import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { LiveSessionCreateInput } from 'src/prisma/@generated/live-session/live-session-create.input';
import { LiveSessionUpdateInput } from 'src/prisma/@generated/live-session/live-session-update.input';
import { LiveSessionWhereUniqueInput } from 'src/prisma/@generated/live-session/live-session-where-unique.input';
import { LiveSessionWhereInput } from 'src/prisma/@generated/live-session/live-session-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LiveSessionsService {
  constructor(private prisma: PrismaService) {}

  create(data: LiveSessionCreateInput, include?: Prisma.LiveSessionInclude) {
    return this.prisma.liveSession.create({
      data,
      include,
    });
  }

  findAll(args: Prisma.LiveSessionFindManyArgs) {
    return this.prisma.liveSession.findMany(args);
  }

  findFirst(
    where: LiveSessionWhereInput,
    orderBy?: Prisma.LiveSessionOrderByWithRelationInput[],
    include?: Prisma.LiveSessionInclude,
  ) {
    return this.prisma.liveSession.findFirst({ where, orderBy, include });
  }

  findOne(
    where: LiveSessionWhereUniqueInput,
    include?: Prisma.LiveSessionInclude,
  ) {
    return this.prisma.liveSession.findUnique({ where, include });
  }

  update(where: LiveSessionWhereUniqueInput, data: LiveSessionUpdateInput) {
    return this.prisma.liveSession.update({
      where,
      data,
    });
  }

  remove(where: LiveSessionWhereUniqueInput) {
    return this.prisma.liveSession.delete({ where });
  }
}
