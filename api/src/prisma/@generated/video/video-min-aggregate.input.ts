import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VideoMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    desc?: true;

    @HideField()
    searchableName?: true;

    @HideField()
    slug?: true;

    @Field(() => Boolean, {nullable:true})
    privacy?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @HideField()
    dirId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
