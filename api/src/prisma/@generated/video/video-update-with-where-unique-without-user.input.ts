import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoUpdateWithoutUserInput } from './video-update-without-user.input';

@InputType()
export class VideoUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => VideoWhereUniqueInput, {nullable:false})
    @Type(() => VideoWhereUniqueInput)
    where!: VideoWhereUniqueInput;

    @Field(() => VideoUpdateWithoutUserInput, {nullable:false})
    @Type(() => VideoUpdateWithoutUserInput)
    data!: VideoUpdateWithoutUserInput;
}
