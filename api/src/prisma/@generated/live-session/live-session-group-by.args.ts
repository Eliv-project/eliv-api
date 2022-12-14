import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LiveSessionWhereInput } from './live-session-where.input';
import { Type } from 'class-transformer';
import { LiveSessionOrderByWithAggregationInput } from './live-session-order-by-with-aggregation.input';
import { LiveSessionScalarFieldEnum } from './live-session-scalar-field.enum';
import { LiveSessionScalarWhereWithAggregatesInput } from './live-session-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LiveSessionCountAggregateInput } from './live-session-count-aggregate.input';
import { LiveSessionAvgAggregateInput } from './live-session-avg-aggregate.input';
import { LiveSessionSumAggregateInput } from './live-session-sum-aggregate.input';
import { LiveSessionMinAggregateInput } from './live-session-min-aggregate.input';
import { LiveSessionMaxAggregateInput } from './live-session-max-aggregate.input';

@ArgsType()
export class LiveSessionGroupByArgs {

    @Field(() => LiveSessionWhereInput, {nullable:true})
    @Type(() => LiveSessionWhereInput)
    where?: LiveSessionWhereInput;

    @Field(() => [LiveSessionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LiveSessionOrderByWithAggregationInput>;

    @Field(() => [LiveSessionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LiveSessionScalarFieldEnum>;

    @Field(() => LiveSessionScalarWhereWithAggregatesInput, {nullable:true})
    having?: LiveSessionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LiveSessionCountAggregateInput, {nullable:true})
    _count?: LiveSessionCountAggregateInput;

    @Field(() => LiveSessionAvgAggregateInput, {nullable:true})
    _avg?: LiveSessionAvgAggregateInput;

    @Field(() => LiveSessionSumAggregateInput, {nullable:true})
    _sum?: LiveSessionSumAggregateInput;

    @Field(() => LiveSessionMinAggregateInput, {nullable:true})
    _min?: LiveSessionMinAggregateInput;

    @Field(() => LiveSessionMaxAggregateInput, {nullable:true})
    _max?: LiveSessionMaxAggregateInput;
}
