import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OAuthLinkMinAggregate {

    @Field(() => String, {nullable:true})
    provider?: string;

    @Field(() => String, {nullable:true})
    providerId?: string;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
