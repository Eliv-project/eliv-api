import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateWithoutLiveSessionInput } from './video-create-without-live-session.input';
import { Type } from 'class-transformer';
import { VideoCreateOrConnectWithoutLiveSessionInput } from './video-create-or-connect-without-live-session.input';
import { VideoUpsertWithoutLiveSessionInput } from './video-upsert-without-live-session.input';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { VideoUpdateWithoutLiveSessionInput } from './video-update-without-live-session.input';

@InputType()
export class VideoUpdateOneRequiredWithoutLiveSessionNestedInput {

    @Field(() => VideoCreateWithoutLiveSessionInput, {nullable:true})
    @Type(() => VideoCreateWithoutLiveSessionInput)
    create?: VideoCreateWithoutLiveSessionInput;

    @Field(() => VideoCreateOrConnectWithoutLiveSessionInput, {nullable:true})
    @Type(() => VideoCreateOrConnectWithoutLiveSessionInput)
    connectOrCreate?: VideoCreateOrConnectWithoutLiveSessionInput;

    @Field(() => VideoUpsertWithoutLiveSessionInput, {nullable:true})
    @Type(() => VideoUpsertWithoutLiveSessionInput)
    upsert?: VideoUpsertWithoutLiveSessionInput;

    @Field(() => VideoWhereUniqueInput, {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    connect?: VideoWhereUniqueInput;

    @Field(() => VideoUpdateWithoutLiveSessionInput, {nullable:true})
    @Type(() => VideoUpdateWithoutLiveSessionInput)
    update?: VideoUpdateWithoutLiveSessionInput;
}
