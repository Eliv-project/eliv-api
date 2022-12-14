import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoCreateWithoutLiveSessionInput } from './video-create-without-live-session.input';

@InputType()
export class VideoCreateOrConnectWithoutLiveSessionInput {

    @Field(() => VideoWhereUniqueInput, {nullable:false})
    @Type(() => VideoWhereUniqueInput)
    where!: VideoWhereUniqueInput;

    @Field(() => VideoCreateWithoutLiveSessionInput, {nullable:false})
    @Type(() => VideoCreateWithoutLiveSessionInput)
    create!: VideoCreateWithoutLiveSessionInput;
}
