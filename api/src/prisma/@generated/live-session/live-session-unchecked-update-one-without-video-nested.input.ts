import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LiveSessionCreateWithoutVideoInput } from './live-session-create-without-video.input';
import { Type } from 'class-transformer';
import { LiveSessionCreateOrConnectWithoutVideoInput } from './live-session-create-or-connect-without-video.input';
import { LiveSessionUpsertWithoutVideoInput } from './live-session-upsert-without-video.input';
import { LiveSessionWhereUniqueInput } from './live-session-where-unique.input';
import { LiveSessionUpdateWithoutVideoInput } from './live-session-update-without-video.input';

@InputType()
export class LiveSessionUncheckedUpdateOneWithoutVideoNestedInput {

    @Field(() => LiveSessionCreateWithoutVideoInput, {nullable:true})
    @Type(() => LiveSessionCreateWithoutVideoInput)
    create?: LiveSessionCreateWithoutVideoInput;

    @Field(() => LiveSessionCreateOrConnectWithoutVideoInput, {nullable:true})
    @Type(() => LiveSessionCreateOrConnectWithoutVideoInput)
    connectOrCreate?: LiveSessionCreateOrConnectWithoutVideoInput;

    @Field(() => LiveSessionUpsertWithoutVideoInput, {nullable:true})
    @Type(() => LiveSessionUpsertWithoutVideoInput)
    upsert?: LiveSessionUpsertWithoutVideoInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => LiveSessionWhereUniqueInput, {nullable:true})
    @Type(() => LiveSessionWhereUniqueInput)
    connect?: LiveSessionWhereUniqueInput;

    @Field(() => LiveSessionUpdateWithoutVideoInput, {nullable:true})
    @Type(() => LiveSessionUpdateWithoutVideoInput)
    update?: LiveSessionUpdateWithoutVideoInput;
}
