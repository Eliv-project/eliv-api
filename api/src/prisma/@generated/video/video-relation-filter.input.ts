import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoWhereInput } from './video-where.input';

@InputType()
export class VideoRelationFilter {

    @Field(() => VideoWhereInput, {nullable:true})
    is?: VideoWhereInput;

    @Field(() => VideoWhereInput, {nullable:true})
    isNot?: VideoWhereInput;
}
