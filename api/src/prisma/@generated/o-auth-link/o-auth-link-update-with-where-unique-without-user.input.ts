import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthLinkWhereUniqueInput } from './o-auth-link-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthLinkUpdateWithoutUserInput } from './o-auth-link-update-without-user.input';

@InputType()
export class OAuthLinkUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => OAuthLinkWhereUniqueInput, {nullable:false})
    @Type(() => OAuthLinkWhereUniqueInput)
    where!: OAuthLinkWhereUniqueInput;

    @Field(() => OAuthLinkUpdateWithoutUserInput, {nullable:false})
    @Type(() => OAuthLinkUpdateWithoutUserInput)
    data!: OAuthLinkUpdateWithoutUserInput;
}
