import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StreamKey } from '../stream-key/stream-key.model';
import { Video } from '../video/video.model';

@ObjectType()
export class LiveSession {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    status!: number;

    @Field(() => StreamKey, {nullable:false})
    streamKey?: StreamKey;

    @Field(() => Int, {nullable:false})
    streamKeyId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Video, {nullable:false})
    video?: Video;

    @Field(() => Int, {nullable:false})
    videoId!: number;
}
