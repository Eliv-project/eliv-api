import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput } from '../user-subscription/user-subscription-unchecked-update-many-without-user-nested.input';
import { UserSubscriptionUncheckedUpdateManyWithoutSubscribingUserNestedInput } from '../user-subscription/user-subscription-unchecked-update-many-without-subscribing-user-nested.input';
import { VideoUncheckedUpdateManyWithoutUserNestedInput } from '../video/video-unchecked-update-many-without-user-nested.input';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
import { VoteUncheckedUpdateManyWithoutUserNestedInput } from '../vote/vote-unchecked-update-many-without-user-nested.input';
import { ViewUncheckedUpdateManyWithoutUserNestedInput } from '../view/view-unchecked-update-many-without-user-nested.input';
import { StreamKeyUncheckedUpdateManyWithoutUserNestedInput } from '../stream-key/stream-key-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutOauthLinksInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    roleId?: IntFieldUpdateOperationsInput;

    @Field(() => UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    subscribingUsers?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserSubscriptionUncheckedUpdateManyWithoutSubscribingUserNestedInput, {nullable:true})
    subscribers?: UserSubscriptionUncheckedUpdateManyWithoutSubscribingUserNestedInput;

    @Field(() => VideoUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => StreamKeyUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    streamKeys?: StreamKeyUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    verified?: NullableBoolFieldUpdateOperationsInput;
}
