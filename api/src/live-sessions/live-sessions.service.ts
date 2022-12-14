import { Injectable } from '@nestjs/common';
import { LiveSessionCreateInput } from 'src/prisma/@generated/live-session/live-session-create.input';
import { LiveSessionUpdateInput } from 'src/prisma/@generated/live-session/live-session-update.input';
import { LiveSessionWhereUniqueInput } from 'src/prisma/@generated/live-session/live-session-where-unique.input';
import { LiveSessionWhereInput } from 'src/prisma/@generated/live-session/live-session-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LiveSessionsService {
  constructor(private prisma: PrismaService) {}

  create(data: LiveSessionCreateInput) {
    return this.prisma.liveSession.create({ data });
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
