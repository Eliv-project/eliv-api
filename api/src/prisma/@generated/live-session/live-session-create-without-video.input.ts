import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LiveSessionCreateWithoutVideoInput {

    @Field(() => Int, {nullable:true})
    status?: number;

    @Field(() => String, {nullable:true})
    streamKey?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
