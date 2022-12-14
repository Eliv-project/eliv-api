import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthLinkCreateManyInput } from './o-auth-link-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOAuthLinkArgs {

    @Field(() => [OAuthLinkCreateManyInput], {nullable:false})
    @Type(() => OAuthLinkCreateManyInput)
    data!: Array<OAuthLinkCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
