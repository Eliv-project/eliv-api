import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOauthLinksInput } from './user-create-without-oauth-links.input';

@InputType()
export class UserCreateOrConnectWithoutOauthLinksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutOauthLinksInput, {nullable:false})
    @Type(() => UserCreateWithoutOauthLinksInput)
    create!: UserCreateWithoutOauthLinksInput;
}
