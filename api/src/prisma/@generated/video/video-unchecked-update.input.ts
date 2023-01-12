import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LiveSessionUncheckedUpdateOneWithoutVideoNestedInput } from '../live-session/live-session-unchecked-update-one-without-video-nested.input';
import { VodSessionUncheckedUpdateOneWithoutVideoNestedInput } from '../vod-session/vod-session-unchecked-update-one-without-video-nested.input';
import { CommentUncheckedUpdateManyWithoutVideoNestedInput } from '../comment/comment-unchecked-update-many-without-video-nested.input';

@InputType()
export class VideoUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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
    dirId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => LiveSessionUncheckedUpdateOneWithoutVideoNestedInput, {nullable:true})
    liveSession?: LiveSessionUncheckedUpdateOneWithoutVideoNestedInput;

    @Field(() => VodSessionUncheckedUpdateOneWithoutVideoNestedInput, {nullable:true})
    vodSession?: VodSessionUncheckedUpdateOneWithoutVideoNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutVideoNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput;
}
