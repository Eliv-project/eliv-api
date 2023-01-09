import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { VideoCountOrderByAggregateInput } from './video-count-order-by-aggregate.input';
import { VideoAvgOrderByAggregateInput } from './video-avg-order-by-aggregate.input';
import { VideoMaxOrderByAggregateInput } from './video-max-order-by-aggregate.input';
import { VideoMinOrderByAggregateInput } from './video-min-order-by-aggregate.input';
import { VideoSumOrderByAggregateInput } from './video-sum-order-by-aggregate.input';

@InputType()
export class VideoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    desc?: keyof typeof SortOrder;

    @HideField()
    searchableName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumbnail?: keyof typeof SortOrder;

    @HideField()
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    privacy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    dirId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => VideoCountOrderByAggregateInput, {nullable:true})
    _count?: VideoCountOrderByAggregateInput;

    @Field(() => VideoAvgOrderByAggregateInput, {nullable:true})
    _avg?: VideoAvgOrderByAggregateInput;

    @Field(() => VideoMaxOrderByAggregateInput, {nullable:true})
    _max?: VideoMaxOrderByAggregateInput;

    @Field(() => VideoMinOrderByAggregateInput, {nullable:true})
    _min?: VideoMinOrderByAggregateInput;

    @Field(() => VideoSumOrderByAggregateInput, {nullable:true})
    _sum?: VideoSumOrderByAggregateInput;
}
