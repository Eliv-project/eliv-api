import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.CommentCreateInput, include?: Prisma.CommentInclude) {
    return this.prisma.comment.create({ data, include });
  }

  findAll(args: Prisma.CommentFindManyArgs) {
    return this.prisma.comment.findMany(args);
  }

  async raw<T>(query: Prisma.Sql) {
    const result = await this.prisma.$queryRaw<T>(query);
    return result;
  }

  count(where: Prisma.CommentWhereInput) {
    return this.prisma.comment.count({ where });
  }

  findOne(
    where: Prisma.CommentWhereUniqueInput,
    include?: Prisma.CommentInclude,
  ) {
    return this.prisma.comment.findUnique({ where, include });
  }

  findFirst(where: Prisma.CommentWhereInput) {
    return this.prisma.comment.findFirst({ where });
  }

  update(
    where: Prisma.CommentWhereUniqueInput,
    data: Prisma.CommentUpdateInput,
  ) {
    return this.prisma.comment.update({ where, data });
  }

  remove(where: Prisma.CommentWhereUniqueInput) {
    return this.prisma.comment.delete({ where });
  }
}
