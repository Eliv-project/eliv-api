import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { LiveSessionRelationFilter } from '../live-session/live-session-relation-filter.input';
import { VodSessionRelationFilter } from '../vod-session/vod-session-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';

@InputType()
export class VideoWhereInput {

    @Field(() => [VideoWhereInput], {nullable:true})
    AND?: Array<VideoWhereInput>;

    @Field(() => [VideoWhereInput], {nullable:true})
    OR?: Array<VideoWhereInput>;

    @Field(() => [VideoWhereInput], {nullable:true})
    NOT?: Array<VideoWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => LiveSessionRelationFilter, {nullable:true})
    liveSession?: LiveSessionRelationFilter;

    @Field(() => VodSessionRelationFilter, {nullable:true})
    vodSession?: VodSessionRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;
}
