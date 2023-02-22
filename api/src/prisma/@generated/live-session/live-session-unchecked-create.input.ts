import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LiveChatMessageUncheckedCreateNestedManyWithoutLiveSessionInput } from '../live-chat-message/live-chat-message-unchecked-create-nested-many-without-live-session.input';

@InputType()
export class LiveSessionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    status?: number;

    @Field(() => Int, {nullable:false})
    streamKeyId!: number;

    @Field(() => Date, {nullable:true})
    liveAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endLiveAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    videoId!: number;

    @Field(() => LiveChatMessageUncheckedCreateNestedManyWithoutLiveSessionInput, {nullable:true})
    liveChatMessages?: LiveChatMessageUncheckedCreateNestedManyWithoutLiveSessionInput;
}
