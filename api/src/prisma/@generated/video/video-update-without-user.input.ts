import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { LiveSessionUpdateOneWithoutVideoNestedInput } from '../live-session/live-session-update-one-without-video-nested.input';
import { VodSessionUpdateOneWithoutVideoNestedInput } from '../vod-session/vod-session-update-one-without-video-nested.input';
import { CommentUpdateManyWithoutVideoNestedInput } from '../comment/comment-update-many-without-video-nested.input';
import { VoteUpdateManyWithoutVideoNestedInput } from '../vote/vote-update-many-without-video-nested.input';
import { ViewUpdateManyWithoutVideoNestedInput } from '../view/view-update-many-without-video-nested.input';

@InputType()
export class VideoUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    desc?: NullableStringFieldUpdateOperationsInput;

    @HideField()
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

    @Field(() => LiveSessionUpdateOneWithoutVideoNestedInput, {nullable:true})
    liveSession?: LiveSessionUpdateOneWithoutVideoNestedInput;

    @Field(() => VodSessionUpdateOneWithoutVideoNestedInput, {nullable:true})
    vodSession?: VodSessionUpdateOneWithoutVideoNestedInput;

    @Field(() => CommentUpdateManyWithoutVideoNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutVideoNestedInput;

    @Field(() => VoteUpdateManyWithoutVideoNestedInput, {nullable:true})
    votes?: VoteUpdateManyWithoutVideoNestedInput;

    @Field(() => ViewUpdateManyWithoutVideoNestedInput, {nullable:true})
    views?: ViewUpdateManyWithoutVideoNestedInput;
}
