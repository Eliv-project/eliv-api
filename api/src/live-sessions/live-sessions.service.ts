import { Injectable } from '@nestjs/common';
import { LiveSessionCreateInput } from 'src/prisma/@generated/live-session/live-session-create.input';
import { LiveSessionUpdateInput } from 'src/prisma/@generated/live-session/live-session-update.input';
import { LiveSessionWhereUniqueInput } from 'src/prisma/@generated/live-session/live-session-where-unique.input';
import { LiveSessionWhereInput } from 'src/prisma/@generated/live-session/live-session-where.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LiveSessionsService {
  constructor(private prisma: PrismaService) {}

  create(data: LiveSessionCreateInput, include?: Prisma.LiveSessionInclude) {
    return this.prisma.liveSession.create({
      data,
      include,
    });
  }

  findAll(where: LiveSessionWhereInput) {
    return this.prisma.liveSession.findMany({ where });
  }

  findOne(where: LiveSessionWhereUniqueInput) {
    return this.prisma.liveSession.findUnique({ where });
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
