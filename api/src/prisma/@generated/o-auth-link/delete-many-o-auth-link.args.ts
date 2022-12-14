import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthLinkWhereInput } from './o-auth-link-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOAuthLinkArgs {

    @Field(() => OAuthLinkWhereInput, {nullable:true})
    @Type(() => OAuthLinkWhereInput)
    where?: OAuthLinkWhereInput;
}
