import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class OAuthLinkUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;
}
