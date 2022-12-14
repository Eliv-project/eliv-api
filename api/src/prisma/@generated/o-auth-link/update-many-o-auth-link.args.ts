import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthLinkUpdateManyMutationInput } from './o-auth-link-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OAuthLinkWhereInput } from './o-auth-link-where.input';

@ArgsType()
export class UpdateManyOAuthLinkArgs {

    @Field(() => OAuthLinkUpdateManyMutationInput, {nullable:false})
    @Type(() => OAuthLinkUpdateManyMutationInput)
    data!: OAuthLinkUpdateManyMutationInput;

    @Field(() => OAuthLinkWhereInput, {nullable:true})
    @Type(() => OAuthLinkWhereInput)
    where?: OAuthLinkWhereInput;
}
