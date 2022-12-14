import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateWithoutLiveSessionInput } from './video-create-without-live-session.input';
import { Type } from 'class-transformer';
import { VideoCreateOrConnectWithoutLiveSessionInput } from './video-create-or-connect-without-live-session.input';
import { VideoWhereUniqueInput } from './video-where-unique.input';

@InputType()
export class VideoCreateNestedOneWithoutLiveSessionInput {

    @Field(() => VideoCreateWithoutLiveSessionInput, {nullable:true})
    @Type(() => VideoCreateWithoutLiveSessionInput)
    create?: VideoCreateWithoutLiveSessionInput;

    @Field(() => VideoCreateOrConnectWithoutLiveSessionInput, {nullable:true})
    @Type(() => VideoCreateOrConnectWithoutLiveSessionInput)
    connectOrCreate?: VideoCreateOrConnectWithoutLiveSessionInput;

    @Field(() => VideoWhereUniqueInput, {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    connect?: VideoWhereUniqueInput;
}
