import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import fs from 'fs';

@Injectable()
export class LiveSessionsService {
  constructor(private prisma: PrismaService) {}

  create(
    data: Prisma.LiveSessionCreateInput,
    include?: Prisma.LiveSessionInclude,
  ) {
    return this.prisma.liveSession.create({
      data,
      include,
    });
  }

  findAll(args: Prisma.LiveSessionFindManyArgs) {
    return this.prisma.liveSession.findMany(args);
  }

  findFirst(
    where: Prisma.LiveSessionWhereInput,
    orderBy?: Prisma.LiveSessionOrderByWithRelationInput[],
    include?: Prisma.LiveSessionInclude,
  ) {
    return this.prisma.liveSession.findFirst({ where, orderBy, include });
  }

  findOne(
    where: Prisma.LiveSessionWhereUniqueInput,
    include?: Prisma.LiveSessionInclude,
  ) {
    return this.prisma.liveSession.findUnique({ where, include });
  }

  update(
    where: Prisma.LiveSessionWhereUniqueInput,
    data: Prisma.LiveSessionUpdateInput,
  ) {
    return this.prisma.liveSession.update({
      where,
      data,
    });
  }

  remove(where: Prisma.LiveSessionWhereUniqueInput) {
    return this.prisma.liveSession.delete({ where });
  }

  endList(filePath) {
    return fs.appendFile(filePath, '\n #EXT-X-ENDLIST', function (err) {
      if (err) throw err;
      console.log('Saved!', filePath);
    });
  }
}
