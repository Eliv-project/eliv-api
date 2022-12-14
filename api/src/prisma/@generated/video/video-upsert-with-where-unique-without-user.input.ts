import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoUpdateWithoutUserInput } from './video-update-without-user.input';
import { VideoCreateWithoutUserInput } from './video-create-without-user.input';

@InputType()
export class VideoUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => VideoWhereUniqueInput, {nullable:false})
    @Type(() => VideoWhereUniqueInput)
    where!: VideoWhereUniqueInput;

    @Field(() => VideoUpdateWithoutUserInput, {nullable:false})
    @Type(() => VideoUpdateWithoutUserInput)
    update!: VideoUpdateWithoutUserInput;

    @Field(() => VideoCreateWithoutUserInput, {nullable:false})
    @Type(() => VideoCreateWithoutUserInput)
    create!: VideoCreateWithoutUserInput;
}
