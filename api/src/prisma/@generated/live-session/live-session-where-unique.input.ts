import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LiveSessionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    streamKey?: string;

    @Field(() => Int, {nullable:true})
    videoId?: number;
}
