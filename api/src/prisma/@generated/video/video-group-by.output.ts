import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Float } from '@nestjs/graphql';
import { VideoCountAggregate } from './video-count-aggregate.output';
import { VideoAvgAggregate } from './video-avg-aggregate.output';
import { VideoSumAggregate } from './video-sum-aggregate.output';
import { VideoMinAggregate } from './video-min-aggregate.output';
import { VideoMaxAggregate } from './video-max-aggregate.output';

@ObjectType()
export class VideoGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    desc?: string;

    @HideField()
    searchableName?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    thumbnail?: any;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Int, {nullable:true})
    privacy?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Float, {nullable:false})
    duration!: number;

    @Field(() => String, {nullable:true})
    dirId?: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => VideoCountAggregate, {nullable:true})
    _count?: VideoCountAggregate;

    @Field(() => VideoAvgAggregate, {nullable:true})
    _avg?: VideoAvgAggregate;

    @Field(() => VideoSumAggregate, {nullable:true})
    _sum?: VideoSumAggregate;

    @Field(() => VideoMinAggregate, {nullable:true})
    _min?: VideoMinAggregate;

    @Field(() => VideoMaxAggregate, {nullable:true})
    _max?: VideoMaxAggregate;
}
