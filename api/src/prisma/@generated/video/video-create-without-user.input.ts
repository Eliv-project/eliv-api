import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { LiveSessionCreateNestedOneWithoutVideoInput } from '../live-session/live-session-create-nested-one-without-video.input';
import { VodSessionCreateNestedOneWithoutVideoInput } from '../vod-session/vod-session-create-nested-one-without-video.input';
import { CommentCreateNestedManyWithoutVideoInput } from '../comment/comment-create-nested-many-without-video.input';
import { VoteCreateNestedManyWithoutVideoInput } from '../vote/vote-create-nested-many-without-video.input';
import { ViewCreateNestedManyWithoutVideoInput } from '../view/view-create-nested-many-without-video.input';

@InputType()
export class VideoCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    desc?: string;

    @HideField()
    searchableName?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    thumbnail?: any;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Int, {nullable:true})
    privacy?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @HideField()
    duration?: number;

    @HideField()
    dirId?: string;

    @Field(() => LiveSessionCreateNestedOneWithoutVideoInput, {nullable:true})
    liveSession?: LiveSessionCreateNestedOneWithoutVideoInput;

    @Field(() => VodSessionCreateNestedOneWithoutVideoInput, {nullable:true})
    vodSession?: VodSessionCreateNestedOneWithoutVideoInput;

    @Field(() => CommentCreateNestedManyWithoutVideoInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutVideoInput;

    @Field(() => VoteCreateNestedManyWithoutVideoInput, {nullable:true})
    votes?: VoteCreateNestedManyWithoutVideoInput;

    @Field(() => ViewCreateNestedManyWithoutVideoInput, {nullable:true})
    views?: ViewCreateNestedManyWithoutVideoInput;
}
