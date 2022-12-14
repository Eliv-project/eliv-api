import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionsOnRolesOrderByRelationAggregateInput } from '../permissions-on-roles/permissions-on-roles-order-by-relation-aggregate.input';

@InputType()
export class PermissionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => PermissionsOnRolesOrderByRelationAggregateInput, {nullable:true})
    roles?: PermissionsOnRolesOrderByRelationAggregateInput;
}
