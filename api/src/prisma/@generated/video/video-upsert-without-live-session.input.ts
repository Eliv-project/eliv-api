import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoUpdateWithoutLiveSessionInput } from './video-update-without-live-session.input';
import { Type } from 'class-transformer';
import { VideoCreateWithoutLiveSessionInput } from './video-create-without-live-session.input';

@InputType()
export class VideoUpsertWithoutLiveSessionInput {

    @Field(() => VideoUpdateWithoutLiveSessionInput, {nullable:false})
    @Type(() => VideoUpdateWithoutLiveSessionInput)
    update!: VideoUpdateWithoutLiveSessionInput;

    @Field(() => VideoCreateWithoutLiveSessionInput, {nullable:false})
    @Type(() => VideoCreateWithoutLiveSessionInput)
    create!: VideoCreateWithoutLiveSessionInput;
}
