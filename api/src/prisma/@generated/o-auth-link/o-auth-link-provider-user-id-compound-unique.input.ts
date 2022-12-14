import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class OAuthLinkProviderUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;
}
