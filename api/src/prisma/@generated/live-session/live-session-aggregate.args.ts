import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LiveSessionWhereInput } from './live-session-where.input';
import { Type } from 'class-transformer';
import { LiveSessionOrderByWithRelationInput } from './live-session-order-by-with-relation.input';
import { LiveSessionWhereUniqueInput } from './live-session-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LiveSessionCountAggregateInput } from './live-session-count-aggregate.input';
import { LiveSessionAvgAggregateInput } from './live-session-avg-aggregate.input';
import { LiveSessionSumAggregateInput } from './live-session-sum-aggregate.input';
import { LiveSessionMinAggregateInput } from './live-session-min-aggregate.input';
import { LiveSessionMaxAggregateInput } from './live-session-max-aggregate.input';

@ArgsType()
export class LiveSessionAggregateArgs {

    @Field(() => LiveSessionWhereInput, {nullable:true})
    @Type(() => LiveSessionWhereInput)
    where?: LiveSessionWhereInput;

    @Field(() => [LiveSessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LiveSessionOrderByWithRelationInput>;

    @Field(() => LiveSessionWhereUniqueInput, {nullable:true})
    cursor?: LiveSessionWhereUniqueInput;

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
