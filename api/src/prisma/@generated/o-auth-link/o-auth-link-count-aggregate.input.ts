import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OAuthLinkCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    provider?: true;

    @Field(() => Boolean, {nullable:true})
    providerId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
