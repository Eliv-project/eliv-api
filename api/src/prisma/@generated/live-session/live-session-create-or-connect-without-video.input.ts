import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LiveSessionWhereUniqueInput } from './live-session-where-unique.input';
import { Type } from 'class-transformer';
import { LiveSessionCreateWithoutVideoInput } from './live-session-create-without-video.input';

@InputType()
export class LiveSessionCreateOrConnectWithoutVideoInput {

    @Field(() => LiveSessionWhereUniqueInput, {nullable:false})
    @Type(() => LiveSessionWhereUniqueInput)
    where!: LiveSessionWhereUniqueInput;

    @Field(() => LiveSessionCreateWithoutVideoInput, {nullable:false})
    @Type(() => LiveSessionCreateWithoutVideoInput)
    create!: LiveSessionCreateWithoutVideoInput;
}
