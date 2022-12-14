import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { OAuthLinkOrderByRelationAggregateInput } from '../o-auth-link/o-auth-link-order-by-relation-aggregate.input';
import { VideoOrderByRelationAggregateInput } from '../video/video-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => OAuthLinkOrderByRelationAggregateInput, {nullable:true})
    oauthLinks?: OAuthLinkOrderByRelationAggregateInput;

    @Field(() => VideoOrderByRelationAggregateInput, {nullable:true})
    videos?: VideoOrderByRelationAggregateInput;
}
