import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthLinkWhereInput } from './o-auth-link-where.input';
import { Type } from 'class-transformer';
import { OAuthLinkOrderByWithAggregationInput } from './o-auth-link-order-by-with-aggregation.input';
import { OAuthLinkScalarFieldEnum } from './o-auth-link-scalar-field.enum';
import { OAuthLinkScalarWhereWithAggregatesInput } from './o-auth-link-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OAuthLinkCountAggregateInput } from './o-auth-link-count-aggregate.input';
import { OAuthLinkAvgAggregateInput } from './o-auth-link-avg-aggregate.input';
import { OAuthLinkSumAggregateInput } from './o-auth-link-sum-aggregate.input';
import { OAuthLinkMinAggregateInput } from './o-auth-link-min-aggregate.input';
import { OAuthLinkMaxAggregateInput } from './o-auth-link-max-aggregate.input';

@ArgsType()
export class OAuthLinkGroupByArgs {

    @Field(() => OAuthLinkWhereInput, {nullable:true})
    @Type(() => OAuthLinkWhereInput)
    where?: OAuthLinkWhereInput;

    @Field(() => [OAuthLinkOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OAuthLinkOrderByWithAggregationInput>;

    @Field(() => [OAuthLinkScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OAuthLinkScalarFieldEnum>;

    @Field(() => OAuthLinkScalarWhereWithAggregatesInput, {nullable:true})
    having?: OAuthLinkScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OAuthLinkCountAggregateInput, {nullable:true})
    _count?: OAuthLinkCountAggregateInput;

    @Field(() => OAuthLinkAvgAggregateInput, {nullable:true})
    _avg?: OAuthLinkAvgAggregateInput;

    @Field(() => OAuthLinkSumAggregateInput, {nullable:true})
    _sum?: OAuthLinkSumAggregateInput;

    @Field(() => OAuthLinkMinAggregateInput, {nullable:true})
    _min?: OAuthLinkMinAggregateInput;

    @Field(() => OAuthLinkMaxAggregateInput, {nullable:true})
    _max?: OAuthLinkMaxAggregateInput;
}
