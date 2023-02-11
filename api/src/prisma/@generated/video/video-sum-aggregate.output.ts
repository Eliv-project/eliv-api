import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class VideoSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    privacy?: number;

    @Field(() => Float, {nullable:true})
    duration?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
