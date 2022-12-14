import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthLinkWhereUniqueInput } from './o-auth-link-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthLinkUpdateWithoutUserInput } from './o-auth-link-update-without-user.input';
import { OAuthLinkCreateWithoutUserInput } from './o-auth-link-create-without-user.input';

@InputType()
export class OAuthLinkUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => OAuthLinkWhereUniqueInput, {nullable:false})
    @Type(() => OAuthLinkWhereUniqueInput)
    where!: OAuthLinkWhereUniqueInput;

    @Field(() => OAuthLinkUpdateWithoutUserInput, {nullable:false})
    @Type(() => OAuthLinkUpdateWithoutUserInput)
    update!: OAuthLinkUpdateWithoutUserInput;

    @Field(() => OAuthLinkCreateWithoutUserInput, {nullable:false})
    @Type(() => OAuthLinkCreateWithoutUserInput)
    create!: OAuthLinkCreateWithoutUserInput;
}
