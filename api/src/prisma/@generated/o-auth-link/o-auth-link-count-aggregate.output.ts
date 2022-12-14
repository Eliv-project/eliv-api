import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OAuthLinkCountAggregate {

    @Field(() => Int, {nullable:false})
    provider!: number;

    @Field(() => Int, {nullable:false})
    providerId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
