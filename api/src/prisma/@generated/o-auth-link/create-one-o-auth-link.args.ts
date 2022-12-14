import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthLinkCreateInput } from './o-auth-link-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOAuthLinkArgs {

    @Field(() => OAuthLinkCreateInput, {nullable:false})
    @Type(() => OAuthLinkCreateInput)
    data!: OAuthLinkCreateInput;
}
