import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OAuthLinkCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => String, {nullable:false})
    providerId!: string;
}
