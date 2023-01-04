import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { LiveSessionUpdateOneWithoutVideoNestedInput } from '../live-session/live-session-update-one-without-video-nested.input';
import { UserUpdateOneRequiredWithoutVideosNestedInput } from '../user/user-update-one-required-without-videos-nested.input';

@InputType()
export class VideoUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    thumbnail?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    privacy?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    dirId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => LiveSessionUpdateOneWithoutVideoNestedInput, {nullable:true})
    liveSession?: LiveSessionUpdateOneWithoutVideoNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutVideosNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutVideosNestedInput;
}
