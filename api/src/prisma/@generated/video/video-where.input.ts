import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LiveSessionRelationFilter } from '../live-session/live-session-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

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

    @Field(() => LiveSessionRelationFilter, {nullable:true})
    liveSession?: LiveSessionRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
