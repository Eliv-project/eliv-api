import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FindManyVodSessionArgs } from 'src/prisma/@generated/vod-session/find-many-vod-session.args';
import { FindUniqueVodSessionArgs } from 'src/prisma/@generated/vod-session/find-unique-vod-session.args';
import { VodSessionCreateInput } from 'src/prisma/@generated/vod-session/vod-session-create.input';
import { VodSessionUpdateInput } from 'src/prisma/@generated/vod-session/vod-session-update.input';
import { VodSessionWhereUniqueInput } from 'src/prisma/@generated/vod-session/vod-session-where-unique.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VodSessionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: VodSessionCreateInput, include?: Prisma.VodSessionInclude) {
    return this.prisma.vodSession.create({ data, include });
  }

  findAll(args: FindManyVodSessionArgs) {
    return this.prisma.vodSession.findMany(args);
  }

  findOne(args: FindUniqueVodSessionArgs) {
    return this.prisma.vodSession.findUnique(args);
  }

  update(where: VodSessionWhereUniqueInput, data: VodSessionUpdateInput) {
    return this.prisma.vodSession.update({ where, data });
  }

  remove(where: VodSessionWhereUniqueInput) {
    return this.prisma.vodSession.delete({ where });
  }
}
