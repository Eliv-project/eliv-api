import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class VideoCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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
}
