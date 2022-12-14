import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthLinkProviderUserIdCompoundUniqueInput } from './o-auth-link-provider-user-id-compound-unique.input';

@InputType()
export class OAuthLinkWhereUniqueInput {

    @Field(() => OAuthLinkProviderUserIdCompoundUniqueInput, {nullable:true})
    provider_userId?: OAuthLinkProviderUserIdCompoundUniqueInput;
}
