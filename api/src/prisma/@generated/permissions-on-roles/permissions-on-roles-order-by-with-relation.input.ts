import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionOrderByWithRelationInput } from '../permission/permission-order-by-with-relation.input';

@InputType()
export class PermissionsOnRolesOrderByWithRelationInput {

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => PermissionOrderByWithRelationInput, {nullable:true})
    permission?: PermissionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
