import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { LiveSessionUncheckedUpdateOneWithoutVideoNestedInput } from '../live-session/live-session-unchecked-update-one-without-video-nested.input';
import { VodSessionUncheckedUpdateOneWithoutVideoNestedInput } from '../vod-session/vod-session-unchecked-update-one-without-video-nested.input';
import { CommentUncheckedUpdateManyWithoutVideoNestedInput } from '../comment/comment-unchecked-update-many-without-video-nested.input';
import { VoteUncheckedUpdateManyWithoutVideoNestedInput } from '../vote/vote-unchecked-update-many-without-video-nested.input';
import { ViewUncheckedUpdateManyWithoutVideoNestedInput } from '../view/view-unchecked-update-many-without-video-nested.input';

@InputType()
export class VideoUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => LiveSessionUncheckedUpdateOneWithoutVideoNestedInput, {nullable:true})
    liveSession?: LiveSessionUncheckedUpdateOneWithoutVideoNestedInput;

    @Field(() => VodSessionUncheckedUpdateOneWithoutVideoNestedInput, {nullable:true})
    vodSession?: VodSessionUncheckedUpdateOneWithoutVideoNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutVideoNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput;

    @Field(() => VoteUncheckedUpdateManyWithoutVideoNestedInput, {nullable:true})
    votes?: VoteUncheckedUpdateManyWithoutVideoNestedInput;

    @Field(() => ViewUncheckedUpdateManyWithoutVideoNestedInput, {nullable:true})
    views?: ViewUncheckedUpdateManyWithoutVideoNestedInput;
}
