import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { UserSubscriptionOrderByRelationAggregateInput } from '../user-subscription/user-subscription-order-by-relation-aggregate.input';
import { OAuthLinkOrderByRelationAggregateInput } from '../o-auth-link/o-auth-link-order-by-relation-aggregate.input';
import { VideoOrderByRelationAggregateInput } from '../video/video-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { VoteOrderByRelationAggregateInput } from '../vote/vote-order-by-relation-aggregate.input';
import { ViewerOrderByWithRelationInput } from '../viewer/viewer-order-by-with-relation.input';
import { StreamKeyOrderByRelationAggregateInput } from '../stream-key/stream-key-order-by-relation-aggregate.input';
import { LiveChatMessageOrderByRelationAggregateInput } from '../live-chat-message/live-chat-message-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => UserSubscriptionOrderByRelationAggregateInput, {nullable:true})
    subscribingUsers?: UserSubscriptionOrderByRelationAggregateInput;

    @Field(() => UserSubscriptionOrderByRelationAggregateInput, {nullable:true})
    subscribers?: UserSubscriptionOrderByRelationAggregateInput;

    @Field(() => OAuthLinkOrderByRelationAggregateInput, {nullable:true})
    oauthLinks?: OAuthLinkOrderByRelationAggregateInput;

    @Field(() => VideoOrderByRelationAggregateInput, {nullable:true})
    videos?: VideoOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => VoteOrderByRelationAggregateInput, {nullable:true})
    votes?: VoteOrderByRelationAggregateInput;

    @Field(() => ViewerOrderByWithRelationInput, {nullable:true})
    viewer?: ViewerOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    viewerId?: keyof typeof SortOrder;

    @Field(() => StreamKeyOrderByRelationAggregateInput, {nullable:true})
    streamKeys?: StreamKeyOrderByRelationAggregateInput;

    @Field(() => LiveChatMessageOrderByRelationAggregateInput, {nullable:true})
    liveChatMessages?: LiveChatMessageOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    onLive?: keyof typeof SortOrder;
}
