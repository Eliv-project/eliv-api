import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OAuthLinkCountAggregate } from './o-auth-link-count-aggregate.output';
import { OAuthLinkAvgAggregate } from './o-auth-link-avg-aggregate.output';
import { OAuthLinkSumAggregate } from './o-auth-link-sum-aggregate.output';
import { OAuthLinkMinAggregate } from './o-auth-link-min-aggregate.output';
import { OAuthLinkMaxAggregate } from './o-auth-link-max-aggregate.output';

@ObjectType()
export class OAuthLinkGroupBy {

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => OAuthLinkCountAggregate, {nullable:true})
    _count?: OAuthLinkCountAggregate;

    @Field(() => OAuthLinkAvgAggregate, {nullable:true})
    _avg?: OAuthLinkAvgAggregate;

    @Field(() => OAuthLinkSumAggregate, {nullable:true})
    _sum?: OAuthLinkSumAggregate;

    @Field(() => OAuthLinkMinAggregate, {nullable:true})
    _min?: OAuthLinkMinAggregate;

    @Field(() => OAuthLinkMaxAggregate, {nullable:true})
    _max?: OAuthLinkMaxAggregate;
}
