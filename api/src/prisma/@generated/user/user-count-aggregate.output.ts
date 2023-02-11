import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    username!: number;

    @Field(() => Int, {nullable:false})
    gender!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @HideField()
    password!: number;

    @Field(() => Int, {nullable:false})
    avatar!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Int, {nullable:false})
    verified!: number;

    @Field(() => Int, {nullable:false})
    onLive!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
