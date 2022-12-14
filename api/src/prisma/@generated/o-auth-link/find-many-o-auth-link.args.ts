import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthLinkWhereInput } from './o-auth-link-where.input';
import { Type } from 'class-transformer';
import { OAuthLinkOrderByWithRelationInput } from './o-auth-link-order-by-with-relation.input';
import { OAuthLinkWhereUniqueInput } from './o-auth-link-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OAuthLinkScalarFieldEnum } from './o-auth-link-scalar-field.enum';

@ArgsType()
export class FindManyOAuthLinkArgs {

    @Field(() => OAuthLinkWhereInput, {nullable:true})
    @Type(() => OAuthLinkWhereInput)
    where?: OAuthLinkWhereInput;

    @Field(() => [OAuthLinkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OAuthLinkOrderByWithRelationInput>;

    @Field(() => OAuthLinkWhereUniqueInput, {nullable:true})
    cursor?: OAuthLinkWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OAuthLinkScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OAuthLinkScalarFieldEnum>;
}
