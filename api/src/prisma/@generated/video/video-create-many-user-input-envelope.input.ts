import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateManyUserInput } from './video-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class VideoCreateManyUserInputEnvelope {

    @Field(() => [VideoCreateManyUserInput], {nullable:false})
    @Type(() => VideoCreateManyUserInput)
    data!: Array<VideoCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
