import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOauthLinksInput } from './user-create-without-oauth-links.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOauthLinksInput } from './user-create-or-connect-without-oauth-links.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOauthLinksInput {

    @Field(() => UserCreateWithoutOauthLinksInput, {nullable:true})
    @Type(() => UserCreateWithoutOauthLinksInput)
    create?: UserCreateWithoutOauthLinksInput;

    @Field(() => UserCreateOrConnectWithoutOauthLinksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOauthLinksInput)
    connectOrCreate?: UserCreateOrConnectWithoutOauthLinksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
