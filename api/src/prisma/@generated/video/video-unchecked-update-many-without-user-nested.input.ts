import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateWithoutUserInput } from './video-create-without-user.input';
import { Type } from 'class-transformer';
import { VideoCreateOrConnectWithoutUserInput } from './video-create-or-connect-without-user.input';
import { VideoUpsertWithWhereUniqueWithoutUserInput } from './video-upsert-with-where-unique-without-user.input';
import { VideoCreateManyUserInputEnvelope } from './video-create-many-user-input-envelope.input';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { VideoUpdateWithWhereUniqueWithoutUserInput } from './video-update-with-where-unique-without-user.input';
import { VideoUpdateManyWithWhereWithoutUserInput } from './video-update-many-with-where-without-user.input';
import { VideoScalarWhereInput } from './video-scalar-where.input';

@InputType()
export class VideoUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [VideoCreateWithoutUserInput], {nullable:true})
    @Type(() => VideoCreateWithoutUserInput)
    create?: Array<VideoCreateWithoutUserInput>;

    @Field(() => [VideoCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VideoCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VideoCreateOrConnectWithoutUserInput>;

    @Field(() => [VideoUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VideoUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VideoUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => VideoCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VideoCreateManyUserInputEnvelope)
    createMany?: VideoCreateManyUserInputEnvelope;

    @Field(() => [VideoWhereUniqueInput], {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    set?: Array<VideoWhereUniqueInput>;

    @Field(() => [VideoWhereUniqueInput], {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    disconnect?: Array<VideoWhereUniqueInput>;

    @Field(() => [VideoWhereUniqueInput], {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    delete?: Array<VideoWhereUniqueInput>;

    @Field(() => [VideoWhereUniqueInput], {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    connect?: Array<VideoWhereUniqueInput>;

    @Field(() => [VideoUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VideoUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VideoUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [VideoUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VideoUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VideoUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [VideoScalarWhereInput], {nullable:true})
    @Type(() => VideoScalarWhereInput)
    deleteMany?: Array<VideoScalarWhereInput>;
}
