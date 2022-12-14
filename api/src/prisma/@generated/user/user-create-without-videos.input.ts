import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';
import { OAuthLinkCreateNestedManyWithoutUserInput } from '../o-auth-link/o-auth-link-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutVideosInput {

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

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUsersInput;

    @Field(() => OAuthLinkCreateNestedManyWithoutUserInput, {nullable:true})
    oauthLinks?: OAuthLinkCreateNestedManyWithoutUserInput;
}
