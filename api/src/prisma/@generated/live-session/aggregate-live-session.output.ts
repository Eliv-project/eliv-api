import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LiveSessionCountAggregate } from './live-session-count-aggregate.output';
import { LiveSessionAvgAggregate } from './live-session-avg-aggregate.output';
import { LiveSessionSumAggregate } from './live-session-sum-aggregate.output';
import { LiveSessionMinAggregate } from './live-session-min-aggregate.output';
import { LiveSessionMaxAggregate } from './live-session-max-aggregate.output';

@ObjectType()
export class AggregateLiveSession {

    @Field(() => LiveSessionCountAggregate, {nullable:true})
    _count?: LiveSessionCountAggregate;

    @Field(() => LiveSessionAvgAggregate, {nullable:true})
    _avg?: LiveSessionAvgAggregate;

    @Field(() => LiveSessionSumAggregate, {nullable:true})
    _sum?: LiveSessionSumAggregate;

    @Field(() => LiveSessionMinAggregate, {nullable:true})
    _min?: LiveSessionMinAggregate;

    @Field(() => LiveSessionMaxAggregate, {nullable:true})
    _max?: LiveSessionMaxAggregate;
}
