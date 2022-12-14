import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { OAuthLinkListRelationFilter } from '../o-auth-link/o-auth-link-list-relation-filter.input';
import { VideoListRelationFilter } from '../video/video-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    gender?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    avatar?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => OAuthLinkListRelationFilter, {nullable:true})
    oauthLinks?: OAuthLinkListRelationFilter;

    @Field(() => VideoListRelationFilter, {nullable:true})
    videos?: VideoListRelationFilter;
}
