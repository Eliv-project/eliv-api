import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOauthLinksInput } from './user-create-without-oauth-links.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOauthLinksInput } from './user-create-or-connect-without-oauth-links.input';
import { UserUpsertWithoutOauthLinksInput } from './user-upsert-without-oauth-links.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutOauthLinksInput } from './user-update-without-oauth-links.input';

@InputType()
export class UserUpdateOneRequiredWithoutOauthLinksNestedInput {

    @Field(() => UserCreateWithoutOauthLinksInput, {nullable:true})
    @Type(() => UserCreateWithoutOauthLinksInput)
    create?: UserCreateWithoutOauthLinksInput;

    @Field(() => UserCreateOrConnectWithoutOauthLinksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOauthLinksInput)
    connectOrCreate?: UserCreateOrConnectWithoutOauthLinksInput;

    @Field(() => UserUpsertWithoutOauthLinksInput, {nullable:true})
    @Type(() => UserUpsertWithoutOauthLinksInput)
    upsert?: UserUpsertWithoutOauthLinksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutOauthLinksInput, {nullable:true})
    @Type(() => UserUpdateWithoutOauthLinksInput)
    update?: UserUpdateWithoutOauthLinksInput;
}
