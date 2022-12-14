import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutOauthLinksInput } from '../user/user-create-nested-one-without-oauth-links.input';

@InputType()
export class OAuthLinkCreateInput {

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => UserCreateNestedOneWithoutOauthLinksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutOauthLinksInput;
}
