import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    subscribingUsers?: number;

    @Field(() => Int, {nullable:false})
    subscribers?: number;

    @Field(() => Int, {nullable:false})
    oauthLinks?: number;

    @Field(() => Int, {nullable:false})
    videos?: number;

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    votes?: number;

    @Field(() => Int, {nullable:false})
    streamKeys?: number;

    @Field(() => Int, {nullable:false})
    liveChatMessages?: number;
}
