import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthLinkWhereUniqueInput } from './o-auth-link-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthLinkCreateInput } from './o-auth-link-create.input';
import { OAuthLinkUpdateInput } from './o-auth-link-update.input';

@ArgsType()
export class UpsertOneOAuthLinkArgs {

    @Field(() => OAuthLinkWhereUniqueInput, {nullable:false})
    @Type(() => OAuthLinkWhereUniqueInput)
    where!: OAuthLinkWhereUniqueInput;

    @Field(() => OAuthLinkCreateInput, {nullable:false})
    @Type(() => OAuthLinkCreateInput)
    create!: OAuthLinkCreateInput;

    @Field(() => OAuthLinkUpdateInput, {nullable:false})
    @Type(() => OAuthLinkUpdateInput)
    update!: OAuthLinkUpdateInput;
}
