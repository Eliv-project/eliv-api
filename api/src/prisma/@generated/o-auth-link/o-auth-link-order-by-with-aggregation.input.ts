import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OAuthLinkCountOrderByAggregateInput } from './o-auth-link-count-order-by-aggregate.input';
import { OAuthLinkAvgOrderByAggregateInput } from './o-auth-link-avg-order-by-aggregate.input';
import { OAuthLinkMaxOrderByAggregateInput } from './o-auth-link-max-order-by-aggregate.input';
import { OAuthLinkMinOrderByAggregateInput } from './o-auth-link-min-order-by-aggregate.input';
import { OAuthLinkSumOrderByAggregateInput } from './o-auth-link-sum-order-by-aggregate.input';

@InputType()
export class OAuthLinkOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    providerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => OAuthLinkCountOrderByAggregateInput, {nullable:true})
    _count?: OAuthLinkCountOrderByAggregateInput;

    @Field(() => OAuthLinkAvgOrderByAggregateInput, {nullable:true})
    _avg?: OAuthLinkAvgOrderByAggregateInput;

    @Field(() => OAuthLinkMaxOrderByAggregateInput, {nullable:true})
    _max?: OAuthLinkMaxOrderByAggregateInput;

    @Field(() => OAuthLinkMinOrderByAggregateInput, {nullable:true})
    _min?: OAuthLinkMinOrderByAggregateInput;

    @Field(() => OAuthLinkSumOrderByAggregateInput, {nullable:true})
    _sum?: OAuthLinkSumOrderByAggregateInput;
}
