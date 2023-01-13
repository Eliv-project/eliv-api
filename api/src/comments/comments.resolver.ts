import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';
import { CommentCreateInput } from 'src/prisma/@generated/comment/comment-create.input';
import { CommentUpdateInput } from 'src/prisma/@generated/comment/comment-update.input';
import { CommentWhereUniqueInput } from 'src/prisma/@generated/comment/comment-where-unique.input';
import { CommentWhereInput } from 'src/prisma/@generated/comment/comment-where.input';
import { Comment } from 'src/prisma/@generated/comment/comment.model';
import { CommentsService } from './comments.service';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Mutation(() => Comment)
  createComment(@Args('data') data: CommentCreateInput) {
    return this.commentsService.create(data);
  }

  @Query(() => [Comment], { name: 'comments' })
  @IsPublic()
  findAll(@Args('where') where: CommentWhereInput) {
    return this.commentsService.findAll(where);
  }

  @Query(() => Comment, { name: 'comment' })
  findOne(@Args('where') where: CommentWhereUniqueInput) {
    return this.commentsService.findOne(where);
  }

  @Mutation(() => Comment)
  updateComment(
    @Args('where') where: CommentWhereUniqueInput,
    @Args('data') data: CommentUpdateInput,
  ) {
    return this.commentsService.update(where, data);
  }

  @Mutation(() => Comment)
  removeComment(@Args('where') where: CommentWhereUniqueInput) {
    return this.commentsService.remove(where);
  }
}
