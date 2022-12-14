import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VideoOrderByWithRelationInput } from '../video/video-order-by-with-relation.input';

@InputType()
export class LiveSessionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    streamKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => VideoOrderByWithRelationInput, {nullable:true})
    video?: VideoOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    videoId?: keyof typeof SortOrder;
}
