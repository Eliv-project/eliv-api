import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PermissionsOnRolesMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
