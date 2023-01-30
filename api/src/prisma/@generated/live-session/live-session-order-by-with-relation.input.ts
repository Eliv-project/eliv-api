import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StreamKeyOrderByWithRelationInput } from '../stream-key/stream-key-order-by-with-relation.input';
import { VideoOrderByWithRelationInput } from '../video/video-order-by-with-relation.input';

@InputType()
export class LiveSessionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => StreamKeyOrderByWithRelationInput, {nullable:true})
    streamKey?: StreamKeyOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    streamKeyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => VideoOrderByWithRelationInput, {nullable:true})
    video?: VideoOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    videoId?: keyof typeof SortOrder;
}
