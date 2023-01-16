import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';
import { CommentUpdateInput } from 'src/prisma/@generated/comment/comment-update.input';
import { CommentWhereUniqueInput } from 'src/prisma/@generated/comment/comment-where-unique.input';
import { CommentWhereInput } from 'src/prisma/@generated/comment/comment-where.input';
import { Comment } from 'src/prisma/@generated/comment/comment.model';
import { User } from 'src/prisma/@generated/user/user.model';
import { CommentsService } from './comments.service';
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
    const { content, replyTo, video } = data;
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

  @Query(() => [Comment], { name: 'comments' })
  @IsPublic()
  findAll(@Args('where') where: CommentWhereInput) {
    return this.commentsService.findAll(where, { user: true, _count: true });
  }

  @Query(() => [Comment], { name: 'comments' })
  @IsPublic()
  findAllWithVotes(@Args('where') where: CommentWhereInput) {
    return this.commentsService.raw(Prisma.sql`
    SELECT posts.postid, posts.postbody,
    COUNT(DISTINCT comments.commentid) AS comment_count, 
    (SELECT COUNT(nullif(postlikes.vote,true)) FROM postlikes WHERE postlikes.postid=posts.postid)  AS dislikes, 
    (SELECT COUNT(nullif(postlikes.vote,false))FROM postlikes WHERE postlikes.postid=posts.postid)  AS likes 
    FROM posts 
    LEFT JOIN comments ON comments.postid=posts.postid 
    GROUP BY posts.postid;
    `);
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
    return this.commentsService.update(where, data);
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
