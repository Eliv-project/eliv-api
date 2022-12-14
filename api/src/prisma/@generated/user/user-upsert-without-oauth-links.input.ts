import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOauthLinksInput } from './user-update-without-oauth-links.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOauthLinksInput } from './user-create-without-oauth-links.input';

@InputType()
export class UserUpsertWithoutOauthLinksInput {

    @Field(() => UserUpdateWithoutOauthLinksInput, {nullable:false})
    @Type(() => UserUpdateWithoutOauthLinksInput)
    update!: UserUpdateWithoutOauthLinksInput;

    @Field(() => UserCreateWithoutOauthLinksInput, {nullable:false})
    @Type(() => UserCreateWithoutOauthLinksInput)
    create!: UserCreateWithoutOauthLinksInput;
}
