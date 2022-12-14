import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VideoCreateNestedOneWithoutLiveSessionInput } from '../video/video-create-nested-one-without-live-session.input';

@InputType()
export class LiveSessionCreateInput {

    @Field(() => Int, {nullable:true})
    status?: number;

    @Field(() => String, {nullable:true})
    streamKey?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VideoCreateNestedOneWithoutLiveSessionInput, {nullable:false})
    video!: VideoCreateNestedOneWithoutLiveSessionInput;
}
