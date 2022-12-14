import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthLinkWhereUniqueInput } from './o-auth-link-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueOAuthLinkArgs {

    @Field(() => OAuthLinkWhereUniqueInput, {nullable:false})
    @Type(() => OAuthLinkWhereUniqueInput)
    where!: OAuthLinkWhereUniqueInput;
}
