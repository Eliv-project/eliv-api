import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
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

    @Field(() => StringNullableFilter, {nullable:true})
    desc?: StringNullableFilter;

    @HideField()
    searchableName?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    thumbnail?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    slug?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    privacy?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @HideField()
    dirId?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
