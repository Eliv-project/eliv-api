import { Field, InputType, PickType } from '@nestjs/graphql';
import { CommentCreateInput } from 'src/prisma/@generated/comment/comment-create.input';
import { CommentWhereUniqueInput } from 'src/prisma/@generated/comment/comment-where-unique.input';

@InputType()
export class CreateCommentInput extends PickType(CommentCreateInput, [
  'content',
  'video',
]) {
  @Field(() => CommentWhereUniqueInput, { nullable: true })
  replyTo?: CommentWhereUniqueInput;
}
