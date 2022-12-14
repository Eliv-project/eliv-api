import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OAuthLink {

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;
}
