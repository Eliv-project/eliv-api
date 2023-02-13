import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LiveSessionCountAggregate } from './live-session-count-aggregate.output';
import { LiveSessionAvgAggregate } from './live-session-avg-aggregate.output';
import { LiveSessionSumAggregate } from './live-session-sum-aggregate.output';
import { LiveSessionMinAggregate } from './live-session-min-aggregate.output';
import { LiveSessionMaxAggregate } from './live-session-max-aggregate.output';

@ObjectType()
export class LiveSessionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    streamKeyId!: number;

    @Field(() => Date, {nullable:true})
    liveAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    videoId!: number;

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
