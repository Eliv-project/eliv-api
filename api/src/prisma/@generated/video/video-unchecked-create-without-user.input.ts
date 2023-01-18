import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Float } from '@nestjs/graphql';
import { LiveSessionUncheckedCreateNestedOneWithoutVideoInput } from '../live-session/live-session-unchecked-create-nested-one-without-video.input';
import { VodSessionUncheckedCreateNestedOneWithoutVideoInput } from '../vod-session/vod-session-unchecked-create-nested-one-without-video.input';
import { CommentUncheckedCreateNestedManyWithoutVideoInput } from '../comment/comment-unchecked-create-nested-many-without-video.input';
import { VoteUncheckedCreateNestedManyWithoutVideoInput } from '../vote/vote-unchecked-create-nested-many-without-video.input';
import { ViewUncheckedCreateNestedManyWithoutVideoInput } from '../view/view-unchecked-create-nested-many-without-video.input';

@InputType()
export class VideoUncheckedCreateWithoutUserInput {

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

    @Field(() => LiveSessionUncheckedCreateNestedOneWithoutVideoInput, {nullable:true})
    liveSession?: LiveSessionUncheckedCreateNestedOneWithoutVideoInput;

    @Field(() => VodSessionUncheckedCreateNestedOneWithoutVideoInput, {nullable:true})
    vodSession?: VodSessionUncheckedCreateNestedOneWithoutVideoInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutVideoInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput;

    @Field(() => VoteUncheckedCreateNestedManyWithoutVideoInput, {nullable:true})
    votes?: VoteUncheckedCreateNestedManyWithoutVideoInput;

    @Field(() => ViewUncheckedCreateNestedManyWithoutVideoInput, {nullable:true})
    views?: ViewUncheckedCreateNestedManyWithoutVideoInput;
}
