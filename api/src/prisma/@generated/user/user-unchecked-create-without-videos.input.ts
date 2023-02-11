import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserSubscriptionUncheckedCreateNestedManyWithoutUserInput } from '../user-subscription/user-subscription-unchecked-create-nested-many-without-user.input';
import { UserSubscriptionUncheckedCreateNestedManyWithoutSubscribingUserInput } from '../user-subscription/user-subscription-unchecked-create-nested-many-without-subscribing-user.input';
import { OAuthLinkUncheckedCreateNestedManyWithoutUserInput } from '../o-auth-link/o-auth-link-unchecked-create-nested-many-without-user.input';
import { CommentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';
import { VoteUncheckedCreateNestedManyWithoutUserInput } from '../vote/vote-unchecked-create-nested-many-without-user.input';
import { ViewUncheckedCreateNestedManyWithoutUserInput } from '../view/view-unchecked-create-nested-many-without-user.input';
import { StreamKeyUncheckedCreateNestedManyWithoutUserInput } from '../stream-key/stream-key-unchecked-create-nested-many-without-user.input';
import { LiveChatMessageUncheckedCreateNestedManyWithoutUserInput } from '../live-chat-message/live-chat-message-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutVideosInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    gender?: boolean;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    avatar?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => UserSubscriptionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    subscribingUsers?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserSubscriptionUncheckedCreateNestedManyWithoutSubscribingUserInput, {nullable:true})
    subscribers?: UserSubscriptionUncheckedCreateNestedManyWithoutSubscribingUserInput;

    @Field(() => OAuthLinkUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    oauthLinks?: OAuthLinkUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: ViewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => StreamKeyUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    streamKeys?: StreamKeyUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => LiveChatMessageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    liveChatMessages?: LiveChatMessageUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => Boolean, {nullable:true})
    onLive?: boolean;
}
