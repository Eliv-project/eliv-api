import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { VideoUncheckedCreateNestedManyWithoutUserInput } from '../video/video-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutOauthLinksInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    gender?: boolean;

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

    @Field(() => VideoUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput;
}
