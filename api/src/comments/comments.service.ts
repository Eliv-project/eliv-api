import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CommentCreateInput } from 'src/prisma/@generated/comment/comment-create.input';
import { CommentUpdateInput } from 'src/prisma/@generated/comment/comment-update.input';
import { CommentWhereUniqueInput } from 'src/prisma/@generated/comment/comment-where-unique.input';
import { CommentWhereInput } from 'src/prisma/@generated/comment/comment-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CommentCreateInput, include?: Prisma.CommentInclude) {
    return this.prisma.comment.create({ data, include });
  }

  findAll(where: CommentWhereInput, include?: Prisma.CommentInclude) {
    return this.prisma.comment.findMany({ where, include });
  }

  raw(query: Prisma.Sql) {
    return this.prisma.$queryRaw(query);
  }

  findOne(where: CommentWhereUniqueInput, include?: Prisma.CommentInclude) {
    return this.prisma.comment.findUnique({ where, include });
  }

  findFirst(where: CommentWhereInput) {
    return this.prisma.comment.findFirst({ where });
  }

  update(where: CommentWhereUniqueInput, data: CommentUpdateInput) {
    return this.prisma.comment.update({ where, data });
  }

  remove(where: CommentWhereUniqueInput) {
    return this.prisma.comment.delete({ where });
  }
}
