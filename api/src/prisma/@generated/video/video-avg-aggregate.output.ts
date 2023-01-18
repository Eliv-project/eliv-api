import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class VideoAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    privacy?: number;

    @Field(() => Float, {nullable:true})
    duration?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;
}
