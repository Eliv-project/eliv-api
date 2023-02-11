import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VideoSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    privacy?: true;

    @HideField()
    duration?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
