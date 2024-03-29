import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserSubscriptionUpdateManyWithoutUserNestedInput } from '../user-subscription/user-subscription-update-many-without-user-nested.input';
import { UserSubscriptionUpdateManyWithoutSubscribingUserNestedInput } from '../user-subscription/user-subscription-update-many-without-subscribing-user-nested.input';
import { OAuthLinkUpdateManyWithoutUserNestedInput } from '../o-auth-link/o-auth-link-update-many-without-user-nested.input';
import { VideoUpdateManyWithoutUserNestedInput } from '../video/video-update-many-without-user-nested.input';
import { CommentUpdateManyWithoutUserNestedInput } from '../comment/comment-update-many-without-user-nested.input';
import { VoteUpdateManyWithoutUserNestedInput } from '../vote/vote-update-many-without-user-nested.input';
import { ViewerUpdateOneWithoutUserNestedInput } from '../viewer/viewer-update-one-without-user-nested.input';
import { StreamKeyUpdateManyWithoutUserNestedInput } from '../stream-key/stream-key-update-many-without-user-nested.input';
import { LiveChatMessageUpdateManyWithoutUserNestedInput } from '../live-chat-message/live-chat-message-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutRoleInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    avatar?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserSubscriptionUpdateManyWithoutUserNestedInput, {nullable:true})
    subscribingUsers?: UserSubscriptionUpdateManyWithoutUserNestedInput;

    @Field(() => UserSubscriptionUpdateManyWithoutSubscribingUserNestedInput, {nullable:true})
    subscribers?: UserSubscriptionUpdateManyWithoutSubscribingUserNestedInput;

    @Field(() => OAuthLinkUpdateManyWithoutUserNestedInput, {nullable:true})
    oauthLinks?: OAuthLinkUpdateManyWithoutUserNestedInput;

    @Field(() => VideoUpdateManyWithoutUserNestedInput, {nullable:true})
    videos?: VideoUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutUserNestedInput;

    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: VoteUpdateManyWithoutUserNestedInput;

    @Field(() => ViewerUpdateOneWithoutUserNestedInput, {nullable:true})
    viewer?: ViewerUpdateOneWithoutUserNestedInput;

    @Field(() => StreamKeyUpdateManyWithoutUserNestedInput, {nullable:true})
    streamKeys?: StreamKeyUpdateManyWithoutUserNestedInput;

    @Field(() => LiveChatMessageUpdateManyWithoutUserNestedInput, {nullable:true})
    liveChatMessages?: LiveChatMessageUpdateManyWithoutUserNestedInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    verified?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    onLive?: NullableBoolFieldUpdateOperationsInput;
}
