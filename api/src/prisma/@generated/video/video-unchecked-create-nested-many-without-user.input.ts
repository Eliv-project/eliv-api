import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateWithoutUserInput } from './video-create-without-user.input';
import { Type } from 'class-transformer';
import { VideoCreateOrConnectWithoutUserInput } from './video-create-or-connect-without-user.input';
import { VideoCreateManyUserInputEnvelope } from './video-create-many-user-input-envelope.input';
import { VideoWhereUniqueInput } from './video-where-unique.input';

@InputType()
export class VideoUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [VideoCreateWithoutUserInput], {nullable:true})
    @Type(() => VideoCreateWithoutUserInput)
    create?: Array<VideoCreateWithoutUserInput>;

    @Field(() => [VideoCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VideoCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VideoCreateOrConnectWithoutUserInput>;

    @Field(() => VideoCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VideoCreateManyUserInputEnvelope)
    createMany?: VideoCreateManyUserInputEnvelope;

    @Field(() => [VideoWhereUniqueInput], {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    connect?: Array<VideoWhereUniqueInput>;
}
