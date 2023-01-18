import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutUsersNestedInput } from '../role/role-update-one-required-without-users-nested.input';
import { UserSubscriptionUpdateManyWithoutUserNestedInput } from '../user-subscription/user-subscription-update-many-without-user-nested.input';
import { UserSubscriptionUpdateManyWithoutSubscribingUserNestedInput } from '../user-subscription/user-subscription-update-many-without-subscribing-user-nested.input';
import { OAuthLinkUpdateManyWithoutUserNestedInput } from '../o-auth-link/o-auth-link-update-many-without-user-nested.input';
import { VideoUpdateManyWithoutUserNestedInput } from '../video/video-update-many-without-user-nested.input';
import { CommentUpdateManyWithoutUserNestedInput } from '../comment/comment-update-many-without-user-nested.input';
import { VoteUpdateManyWithoutUserNestedInput } from '../vote/vote-update-many-without-user-nested.input';
import { ViewUpdateManyWithoutUserNestedInput } from '../view/view-update-many-without-user-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @HideField()
    password?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    avatar?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;

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

    @Field(() => ViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: ViewUpdateManyWithoutUserNestedInput;

    @HideField()
    verified?: NullableBoolFieldUpdateOperationsInput;
}
