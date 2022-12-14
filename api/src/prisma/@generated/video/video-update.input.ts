import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    privacy?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => LiveSessionUpdateOneWithoutVideoNestedInput, {nullable:true})
    liveSession?: LiveSessionUpdateOneWithoutVideoNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutVideosNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutVideosNestedInput;
}
