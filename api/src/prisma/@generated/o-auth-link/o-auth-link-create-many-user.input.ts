import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OAuthLinkCreateManyUserInput {

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => String, {nullable:false})
    providerId!: string;
}
