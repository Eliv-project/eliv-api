import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { LiveSession } from '../live-session/live-session.model';
import { VodSession } from '../vod-session/vod-session.model';

@ObjectType()
export class Video {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    desc!: string | null;

    @HideField()
    searchableName!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    thumbnail!: any | null;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:true,defaultValue:0})
    privacy!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    dirId!: string | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => LiveSession, {nullable:true})
    liveSession?: LiveSession | null;

    @Field(() => VodSession, {nullable:true})
    vodSession?: VodSession | null;
}
