import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { LiveSessionCreateNestedOneWithoutVideoInput } from '../live-session/live-session-create-nested-one-without-video.input';
import { UserCreateNestedOneWithoutVideosInput } from '../user/user-create-nested-one-without-videos.input';

@InputType()
export class VideoCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    thumbnail?: any;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:true})
    privacy?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => LiveSessionCreateNestedOneWithoutVideoInput, {nullable:true})
    liveSession?: LiveSessionCreateNestedOneWithoutVideoInput;

    @Field(() => UserCreateNestedOneWithoutVideosInput, {nullable:false})
    user!: UserCreateNestedOneWithoutVideosInput;
}
