import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LiveSessionUpdateWithoutVideoInput } from './live-session-update-without-video.input';
import { Type } from 'class-transformer';
import { LiveSessionCreateWithoutVideoInput } from './live-session-create-without-video.input';

@InputType()
export class LiveSessionUpsertWithoutVideoInput {

    @Field(() => LiveSessionUpdateWithoutVideoInput, {nullable:false})
    @Type(() => LiveSessionUpdateWithoutVideoInput)
    update!: LiveSessionUpdateWithoutVideoInput;

    @Field(() => LiveSessionCreateWithoutVideoInput, {nullable:false})
    @Type(() => LiveSessionCreateWithoutVideoInput)
    create!: LiveSessionCreateWithoutVideoInput;
}
