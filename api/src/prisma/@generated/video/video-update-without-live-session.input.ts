import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutVideosNestedInput } from '../user/user-update-one-required-without-videos-nested.input';
import { VodSessionUpdateOneWithoutVideoNestedInput } from '../vod-session/vod-session-update-one-without-video-nested.input';
import { CommentUpdateManyWithoutVideoNestedInput } from '../comment/comment-update-many-without-video-nested.input';
import { VoteUpdateManyWithoutVideoNestedInput } from '../vote/vote-update-many-without-video-nested.input';
import { ViewUpdateManyWithoutVideoNestedInput } from '../view/view-update-many-without-video-nested.input';

@InputType()
export class VideoUpdateWithoutLiveSessionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    desc?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    searchableName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    thumbnail?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    slug?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    privacy?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    duration?: FloatFieldUpdateOperationsInput;

    @HideField()
    dirId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutVideosNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutVideosNestedInput;

    @Field(() => VodSessionUpdateOneWithoutVideoNestedInput, {nullable:true})
    vodSession?: VodSessionUpdateOneWithoutVideoNestedInput;

    @Field(() => CommentUpdateManyWithoutVideoNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutVideoNestedInput;

    @Field(() => VoteUpdateManyWithoutVideoNestedInput, {nullable:true})
    votes?: VoteUpdateManyWithoutVideoNestedInput;

    @Field(() => ViewUpdateManyWithoutVideoNestedInput, {nullable:true})
    views?: ViewUpdateManyWithoutVideoNestedInput;
}
