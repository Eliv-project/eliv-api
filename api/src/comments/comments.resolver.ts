import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CommentOrderByWithRelationInput } from 'src/prisma/@generated/comment/comment-order-by-with-relation.input';
import { CommentUpdateInput } from 'src/prisma/@generated/comment/comment-update.input';
import { CommentWhereUniqueInput } from 'src/prisma/@generated/comment/comment-where-unique.input';
import { CommentWhereInput } from 'src/prisma/@generated/comment/comment-where.input';
import { Comment } from 'src/prisma/@generated/comment/comment.model';
import { User } from 'src/prisma/@generated/user/user.model';
import { CommentsService } from './comments.service';
import { CommentWithVotes } from './dto/comment-with-votes.dto';
import { CreateCommentInput } from './dto/create-comment.input';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  async checkExistence(id: number, user?: User) {
    const comment = await this.commentsService.findFirst({
      user: {
        is: { username: { equals: user.username } },
      },
      id: { equals: id },
    });

    if (!comment) {
      throw new NotFoundException('COMMENT_NOT_FOUND');
    }

    return true;
  }

  @Mutation(() => Comment)
  createComment(
    @Args('data') data: CreateCommentInput,
    @CurrentUser() me: User,
  ) {
    const { content, replyTo, video } = data as Prisma.CommentCreateInput & {
      replyTo: any;
    };
    return this.commentsService.create(
      {
        content,
        user: {
          connect: { username: me.username },
        },
        video,
        parentComment: replyTo && {
          connect: replyTo,
        },
      },
      { user: true },
    );
  }

  @Query(() => Int)
  @IsPublic()
  countComment(@Args('where') where: CommentWhereInput) {
    return this.commentsService.count(where);
  }

  @Query(() => [Comment], { name: 'comments' })
  @IsPublic()
  findAll(
    @Args('where') where: CommentWhereInput,
    @Args('orderBy', {
      type: () => [CommentOrderByWithRelationInput],
      nullable: true,
    })
    orderBy: CommentOrderByWithRelationInput[],
  ) {
    return this.commentsService.findAll({
      where,
      orderBy,
      include: { user: true, _count: true },
    });
  }

  @Query(() => [CommentWithVotes], { name: 'commentsWithVotes' })
  @IsPublic(true)
  async findAllWithVotes(
    @Args('where') where: CommentWhereInput,
    @Args('orderBy', {
      type: () => [CommentOrderByWithRelationInput],
      nullable: true,
    })
    orderBy: CommentOrderByWithRelationInput[],
    @CurrentUser() me: User,
  ) {
    let myVoteQuery = '';

    if (me) {
      myVoteQuery = `
      (
        SELECT row_to_json("Vote")
        FROM "Vote"
        WHERE "Vote"."commentId"=c1.id AND "Vote"."userId"=${me.id}
      ) as "myVote",
      `;
    }

    const whereQuery = [
      where.videoId && `c1."videoId"=${where.videoId.equals}`,
      where.parentCommentId &&
        `c1."parentCommentId"=${where.parentCommentId.equals}`,
    ].filter((criteria) => !!criteria);

    const countQuery = [
      `
      (
        SELECT COUNT(*)
        FROM "Comment" c2
        WHERE c2."parentCommentId" = c1.id
      ) as "replyCount",
      `,
    ].filter((queryField) => !!queryField);

    const orderByQuery = (orderBy || []).map((criteria) => {
      if (criteria.createdAt) {
        return `c1."createdAt" ${criteria.createdAt}`;
      } else if (criteria.updatedAt) {
        return `c1."updatedAt" ${criteria.updatedAt}`;
      }
    });

    const query = `SELECT c1.*, row_to_json("User") as user,  
    ${myVoteQuery}
    ${countQuery}
    (
      SELECT COUNT(CASE WHEN "Vote"."voteDirection" > 0 THEN 1 END)
      FROM "Vote"
      WHERE "Vote"."commentId"=c1.id
    ) as likes,
    (
      SELECT COUNT(CASE WHEN "Vote"."voteDirection" < 0 THEN 1 END)
      FROM "Vote"
      WHERE "Vote"."commentId"=c1.id
    ) as dislikes
    FROM "Comment" c1
    JOIN "User" ON "User"."id"=c1."userId"
    ${whereQuery.length > 0 ? `WHERE ${whereQuery.join(' AND ')}` : ''}
    ${orderByQuery.length > 0 ? `ORDER BY ${orderByQuery.join(',')}` : ''}`;

    const comments = await this.commentsService.raw<
      (CommentWithVotes & {
        replyCount?: number;
      })[]
    >(Prisma.sql([query]));

    return comments.map((c) => {
      return {
        ...c,
        _count: {
          childComments: Number(c.replyCount) || 0,
        },
        likes: Number(c.likes),
        dislikes: Number(c.dislikes),
      };
    });
  }

  @Query(() => Comment, { name: 'comment' })
  findOne(@Args('where') where: CommentWhereUniqueInput) {
    return this.commentsService.findOne(where, {
      childComments: {
        include: { _count: true, user: true },
      },
    });
  }

  @Mutation(() => Comment)
  async updateComment(
    @Args('where') where: CommentWhereUniqueInput,
    @Args('data') data: CommentUpdateInput,
    @CurrentUser() me: User,
  ) {
    await this.checkExistence(where.id, me);
    return this.commentsService.update(
      where,
      data as Prisma.CommentUpdateInput,
    );
  }

  @Mutation(() => Comment)
  async removeComment(
    @Args('where') where: CommentWhereUniqueInput,
    @CurrentUser() me: User,
  ) {
    await this.checkExistence(where.id, me);
    return this.commentsService.remove(where);
  }
}
