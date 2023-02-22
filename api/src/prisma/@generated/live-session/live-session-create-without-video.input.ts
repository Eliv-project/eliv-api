import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StreamKeyCreateNestedOneWithoutLiveSessionsInput } from '../stream-key/stream-key-create-nested-one-without-live-sessions.input';
import { HideField } from '@nestjs/graphql';
import { LiveChatMessageCreateNestedManyWithoutLiveSessionInput } from '../live-chat-message/live-chat-message-create-nested-many-without-live-session.input';

@InputType()
export class LiveSessionCreateWithoutVideoInput {

    @Field(() => Int, {nullable:true})
    status?: number;

    @HideField()
    streamKey!: StreamKeyCreateNestedOneWithoutLiveSessionsInput;

    @Field(() => Date, {nullable:true})
    liveAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endLiveAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => LiveChatMessageCreateNestedManyWithoutLiveSessionInput, {nullable:true})
    liveChatMessages?: LiveChatMessageCreateNestedManyWithoutLiveSessionInput;
}
