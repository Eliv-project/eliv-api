import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionsOnRolesCountOrderByAggregateInput } from './permissions-on-roles-count-order-by-aggregate.input';
import { PermissionsOnRolesAvgOrderByAggregateInput } from './permissions-on-roles-avg-order-by-aggregate.input';
import { PermissionsOnRolesMaxOrderByAggregateInput } from './permissions-on-roles-max-order-by-aggregate.input';
import { PermissionsOnRolesMinOrderByAggregateInput } from './permissions-on-roles-min-order-by-aggregate.input';
import { PermissionsOnRolesSumOrderByAggregateInput } from './permissions-on-roles-sum-order-by-aggregate.input';

@InputType()
export class PermissionsOnRolesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => PermissionsOnRolesCountOrderByAggregateInput, {nullable:true})
    _count?: PermissionsOnRolesCountOrderByAggregateInput;

    @Field(() => PermissionsOnRolesAvgOrderByAggregateInput, {nullable:true})
    _avg?: PermissionsOnRolesAvgOrderByAggregateInput;

    @Field(() => PermissionsOnRolesMaxOrderByAggregateInput, {nullable:true})
    _max?: PermissionsOnRolesMaxOrderByAggregateInput;

    @Field(() => PermissionsOnRolesMinOrderByAggregateInput, {nullable:true})
    _min?: PermissionsOnRolesMinOrderByAggregateInput;

    @Field(() => PermissionsOnRolesSumOrderByAggregateInput, {nullable:true})
    _sum?: PermissionsOnRolesSumOrderByAggregateInput;
}
