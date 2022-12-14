import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthLinkWhereInput } from './o-auth-link-where.input';

@InputType()
export class OAuthLinkListRelationFilter {

    @Field(() => OAuthLinkWhereInput, {nullable:true})
    every?: OAuthLinkWhereInput;

    @Field(() => OAuthLinkWhereInput, {nullable:true})
    some?: OAuthLinkWhereInput;

    @Field(() => OAuthLinkWhereInput, {nullable:true})
    none?: OAuthLinkWhereInput;
}
