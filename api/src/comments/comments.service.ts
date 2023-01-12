import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CommentCreateInput } from 'src/prisma/@generated/comment/comment-create.input';
import { CommentUpdateInput } from 'src/prisma/@generated/comment/comment-update.input';
import { CommentWhereUniqueInput } from 'src/prisma/@generated/comment/comment-where-unique.input';
import { CommentWhereInput } from 'src/prisma/@generated/comment/comment-where.input';

@Injectable()
export class CommentsService {
  create(data: CommentCreateInput) {
    return 'This action adds a new comment';
  }

  findAll(where: CommentWhereInput, include?: Prisma.CommentInclude) {
    return `This action returns all comments`;
  }

  findOne(where: CommentWhereUniqueInput, include?: Prisma.CommentInclude) {
    return `This action returns a #${where.id} comment`;
  }

  update(where: CommentWhereUniqueInput, data: CommentUpdateInput) {
    return `This action updates a #${where.id} comment`;
  }

  remove(where: CommentWhereUniqueInput) {
    return `This action removes a #${where.id} comment`;
  }
}
