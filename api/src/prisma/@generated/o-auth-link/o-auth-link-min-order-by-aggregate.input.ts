import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OAuthLinkMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    providerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}
