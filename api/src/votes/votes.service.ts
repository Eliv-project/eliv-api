import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { VoteCreateInput } from 'src/prisma/@generated/vote/vote-create.input';
import { VoteUpdateInput } from 'src/prisma/@generated/vote/vote-update.input';
import { VoteWhereUniqueInput } from 'src/prisma/@generated/vote/vote-where-unique.input';
import { VoteWhereInput } from 'src/prisma/@generated/vote/vote-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VotesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: VoteCreateInput) {
    return this.prisma.vote.create({ data });
  }

  findAll(where: VoteWhereInput, include?: Prisma.VoteInclude) {
    return this.prisma.vote.findMany({ where, include });
  }

  count(where: VoteWhereInput) {
    return this.prisma.vote.count({ where });
  }

  findOne(where: VoteWhereUniqueInput, include?: Prisma.VoteInclude) {
    return this.prisma.vote.findUnique({ where, include });
  }

  findFirst(where: VoteWhereInput) {
    return this.prisma.vote.findFirst({ where });
  }

  update(where: VoteWhereUniqueInput, data: VoteUpdateInput) {
    return this.prisma.vote.update({ where, data });
  }

  remove(where: VoteWhereUniqueInput) {
    return this.prisma.vote.delete({ where });
  }
}
