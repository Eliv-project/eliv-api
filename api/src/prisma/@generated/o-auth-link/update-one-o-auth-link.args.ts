import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthLinkUpdateInput } from './o-auth-link-update.input';
import { Type } from 'class-transformer';
import { OAuthLinkWhereUniqueInput } from './o-auth-link-where-unique.input';

@ArgsType()
export class UpdateOneOAuthLinkArgs {

    @Field(() => OAuthLinkUpdateInput, {nullable:false})
    @Type(() => OAuthLinkUpdateInput)
    data!: OAuthLinkUpdateInput;

    @Field(() => OAuthLinkWhereUniqueInput, {nullable:false})
    @Type(() => OAuthLinkWhereUniqueInput)
    where!: OAuthLinkWhereUniqueInput;
}
