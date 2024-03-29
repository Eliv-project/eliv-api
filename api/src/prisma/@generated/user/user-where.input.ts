import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { UserSubscriptionListRelationFilter } from '../user-subscription/user-subscription-list-relation-filter.input';
import { OAuthLinkListRelationFilter } from '../o-auth-link/o-auth-link-list-relation-filter.input';
import { VideoListRelationFilter } from '../video/video-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { VoteListRelationFilter } from '../vote/vote-list-relation-filter.input';
import { ViewerRelationFilter } from '../viewer/viewer-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StreamKeyListRelationFilter } from '../stream-key/stream-key-list-relation-filter.input';
import { LiveChatMessageListRelationFilter } from '../live-chat-message/live-chat-message-list-relation-filter.input';

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

    @Field(() => BoolNullableFilter, {nullable:true})
    gender?: BoolNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

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

    @Field(() => UserSubscriptionListRelationFilter, {nullable:true})
    subscribingUsers?: UserSubscriptionListRelationFilter;

    @Field(() => UserSubscriptionListRelationFilter, {nullable:true})
    subscribers?: UserSubscriptionListRelationFilter;

    @Field(() => OAuthLinkListRelationFilter, {nullable:true})
    oauthLinks?: OAuthLinkListRelationFilter;

    @Field(() => VideoListRelationFilter, {nullable:true})
    videos?: VideoListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: VoteListRelationFilter;

    @Field(() => ViewerRelationFilter, {nullable:true})
    viewer?: ViewerRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    viewerId?: IntNullableFilter;

    @Field(() => StreamKeyListRelationFilter, {nullable:true})
    streamKeys?: StreamKeyListRelationFilter;

    @Field(() => LiveChatMessageListRelationFilter, {nullable:true})
    liveChatMessages?: LiveChatMessageListRelationFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    verified?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    onLive?: BoolNullableFilter;
}
