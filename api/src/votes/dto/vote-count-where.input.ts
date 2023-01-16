import { InputType, OmitType } from '@nestjs/graphql';
import { VoteWhereInput } from 'src/prisma/@generated/vote/vote-where.input';

@InputType()
export class VoteCountWhereInput extends OmitType(VoteWhereInput, [
  'voteDirection',
]) {}
