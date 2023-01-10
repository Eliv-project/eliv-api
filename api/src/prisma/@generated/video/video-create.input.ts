import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutVideosInput } from '../user/user-create-nested-one-without-videos.input';
import { LiveSessionCreateNestedOneWithoutVideoInput } from '../live-session/live-session-create-nested-one-without-video.input';
import { VodSessionCreateNestedOneWithoutVideoInput } from '../vod-session/vod-session-create-nested-one-without-video.input';

@InputType()
export class VideoCreateInput {

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

    @Field(() => UserCreateNestedOneWithoutVideosInput, {nullable:false})
    user!: UserCreateNestedOneWithoutVideosInput;

    @Field(() => LiveSessionCreateNestedOneWithoutVideoInput, {nullable:true})
    liveSession?: LiveSessionCreateNestedOneWithoutVideoInput;

    @Field(() => VodSessionCreateNestedOneWithoutVideoInput, {nullable:true})
    vodSession?: VodSessionCreateNestedOneWithoutVideoInput;
}
