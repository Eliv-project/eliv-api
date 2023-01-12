import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Role } from '../role/role.model';
import { Int } from '@nestjs/graphql';
import { OAuthLink } from '../o-auth-link/o-auth-link.model';
import { Video } from '../video/video.model';
import { Comment } from '../comment/comment.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true,defaultValue:true})
    gender!: boolean | null;

    @HideField()
    password!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    avatar!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => [OAuthLink], {nullable:true})
    oauthLinks?: Array<OAuthLink>;

    @Field(() => [Video], {nullable:true})
    videos?: Array<Video>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
