import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { VodSessionUncheckedCreateNestedOneWithoutVideoInput } from '../vod-session/vod-session-unchecked-create-nested-one-without-video.input';

@InputType()
export class VideoUncheckedCreateWithoutLiveSessionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    desc?: string;

    @HideField()
    searchableName?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    thumbnail?: any;

    @HideField()
    slug!: string;

    @Field(() => Int, {nullable:true})
    privacy?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @HideField()
    dirId?: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => VodSessionUncheckedCreateNestedOneWithoutVideoInput, {nullable:true})
    vodSession?: VodSessionUncheckedCreateNestedOneWithoutVideoInput;
}
