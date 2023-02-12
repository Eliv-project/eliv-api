import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VotesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.VoteCreateInput) {
    return this.prisma.vote.create({ data });
  }

  findAll(args: Prisma.VoteFindManyArgs) {
    return this.prisma.vote.findMany(args);
  }

  async count(args: Prisma.VoteCountArgs) {
    const [dislikes, likes] = await this.prisma.$transaction([
      this.prisma.vote.count({
        where: { ...args.where, voteDirection: { lt: 0 } },
      }),
      this.prisma.vote.count({
        where: { ...args.where, voteDirection: { gt: 0 } },
      }),
    ]);

    return {
      likes,
      dislikes,
    };
  }

  findOne(where: Prisma.VoteWhereUniqueInput, include?: Prisma.VoteInclude) {
    return this.prisma.vote.findUnique({ where, include });
  }

  findFirst(where: Prisma.VoteWhereInput) {
    return this.prisma.vote.findFirst({ where });
  }

  update(where: Prisma.VoteWhereUniqueInput, data: Prisma.VoteUpdateInput) {
    return this.prisma.vote.update({ where, data });
  }

  remove(where: Prisma.VoteWhereUniqueInput) {
    return this.prisma.vote.delete({ where });
  }
}
