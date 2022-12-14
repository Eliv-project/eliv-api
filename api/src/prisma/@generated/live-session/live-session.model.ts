import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Video } from '../video/video.model';

@ObjectType()
export class LiveSession {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    status!: number;

    @Field(() => String, {nullable:false})
    streamKey!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Video, {nullable:false})
    video?: Video;

    @Field(() => Int, {nullable:false})
    videoId!: number;
}
