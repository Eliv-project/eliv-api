import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StreamKeyUpdateOneRequiredWithoutLiveSessionsNestedInput } from '../stream-key/stream-key-update-one-required-without-live-sessions-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { VideoUpdateOneRequiredWithoutLiveSessionNestedInput } from '../video/video-update-one-required-without-live-session-nested.input';

@InputType()
export class LiveSessionUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    status?: IntFieldUpdateOperationsInput;

    @Field(() => StreamKeyUpdateOneRequiredWithoutLiveSessionsNestedInput, {nullable:true})
    streamKey?: StreamKeyUpdateOneRequiredWithoutLiveSessionsNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => VideoUpdateOneRequiredWithoutLiveSessionNestedInput, {nullable:true})
    video?: VideoUpdateOneRequiredWithoutLiveSessionNestedInput;
}
