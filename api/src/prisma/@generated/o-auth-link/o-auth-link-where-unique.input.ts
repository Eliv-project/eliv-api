import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthLinkProviderProviderIdCompoundUniqueInput } from './o-auth-link-provider-provider-id-compound-unique.input';

@InputType()
export class OAuthLinkWhereUniqueInput {

    @Field(() => String, {nullable:true})
    providerId?: string;

    @Field(() => OAuthLinkProviderProviderIdCompoundUniqueInput, {nullable:true})
    provider_providerId?: OAuthLinkProviderProviderIdCompoundUniqueInput;
}
