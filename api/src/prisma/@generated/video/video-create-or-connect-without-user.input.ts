import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoCreateWithoutUserInput } from './video-create-without-user.input';

@InputType()
export class VideoCreateOrConnectWithoutUserInput {

    @Field(() => VideoWhereUniqueInput, {nullable:false})
    @Type(() => VideoWhereUniqueInput)
    where!: VideoWhereUniqueInput;

    @Field(() => VideoCreateWithoutUserInput, {nullable:false})
    @Type(() => VideoCreateWithoutUserInput)
    create!: VideoCreateWithoutUserInput;
}
