import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class VideoScalarWhereInput {

    @Field(() => [VideoScalarWhereInput], {nullable:true})
    AND?: Array<VideoScalarWhereInput>;

    @Field(() => [VideoScalarWhereInput], {nullable:true})
    OR?: Array<VideoScalarWhereInput>;

    @Field(() => [VideoScalarWhereInput], {nullable:true})
    NOT?: Array<VideoScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    thumbnail?: JsonNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    privacy?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
