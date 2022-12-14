import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { OAuthLinkUncheckedCreateNestedManyWithoutUserInput } from '../o-auth-link/o-auth-link-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutVideosInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:false})
    gender!: boolean;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    avatar?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => OAuthLinkUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    oauthLinks?: OAuthLinkUncheckedCreateNestedManyWithoutUserInput;
}
