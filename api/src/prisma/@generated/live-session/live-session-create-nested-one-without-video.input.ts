import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LiveSessionCreateWithoutVideoInput } from './live-session-create-without-video.input';
import { Type } from 'class-transformer';
import { LiveSessionCreateOrConnectWithoutVideoInput } from './live-session-create-or-connect-without-video.input';
import { LiveSessionWhereUniqueInput } from './live-session-where-unique.input';

@InputType()
export class LiveSessionCreateNestedOneWithoutVideoInput {

    @Field(() => LiveSessionCreateWithoutVideoInput, {nullable:true})
    @Type(() => LiveSessionCreateWithoutVideoInput)
    create?: LiveSessionCreateWithoutVideoInput;

    @Field(() => LiveSessionCreateOrConnectWithoutVideoInput, {nullable:true})
    @Type(() => LiveSessionCreateOrConnectWithoutVideoInput)
    connectOrCreate?: LiveSessionCreateOrConnectWithoutVideoInput;

    @Field(() => LiveSessionWhereUniqueInput, {nullable:true})
    @Type(() => LiveSessionWhereUniqueInput)
    connect?: LiveSessionWhereUniqueInput;
}
