import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LiveSessionCountOrderByAggregateInput } from './live-session-count-order-by-aggregate.input';
import { LiveSessionAvgOrderByAggregateInput } from './live-session-avg-order-by-aggregate.input';
import { LiveSessionMaxOrderByAggregateInput } from './live-session-max-order-by-aggregate.input';
import { LiveSessionMinOrderByAggregateInput } from './live-session-min-order-by-aggregate.input';
import { LiveSessionSumOrderByAggregateInput } from './live-session-sum-order-by-aggregate.input';

@InputType()
export class LiveSessionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    streamKeyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    videoId?: keyof typeof SortOrder;

    @Field(() => LiveSessionCountOrderByAggregateInput, {nullable:true})
    _count?: LiveSessionCountOrderByAggregateInput;

    @Field(() => LiveSessionAvgOrderByAggregateInput, {nullable:true})
    _avg?: LiveSessionAvgOrderByAggregateInput;

    @Field(() => LiveSessionMaxOrderByAggregateInput, {nullable:true})
    _max?: LiveSessionMaxOrderByAggregateInput;

    @Field(() => LiveSessionMinOrderByAggregateInput, {nullable:true})
    _min?: LiveSessionMinOrderByAggregateInput;

    @Field(() => LiveSessionSumOrderByAggregateInput, {nullable:true})
    _sum?: LiveSessionSumOrderByAggregateInput;
}
