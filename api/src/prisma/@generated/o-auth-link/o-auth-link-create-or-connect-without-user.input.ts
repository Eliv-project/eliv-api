import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthLinkWhereUniqueInput } from './o-auth-link-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthLinkCreateWithoutUserInput } from './o-auth-link-create-without-user.input';

@InputType()
export class OAuthLinkCreateOrConnectWithoutUserInput {

    @Field(() => OAuthLinkWhereUniqueInput, {nullable:false})
    @Type(() => OAuthLinkWhereUniqueInput)
    where!: OAuthLinkWhereUniqueInput;

    @Field(() => OAuthLinkCreateWithoutUserInput, {nullable:false})
    @Type(() => OAuthLinkCreateWithoutUserInput)
    create!: OAuthLinkCreateWithoutUserInput;
}
