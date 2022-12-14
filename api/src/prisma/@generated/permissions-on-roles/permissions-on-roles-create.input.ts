import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutPermissionsInput } from '../role/role-create-nested-one-without-permissions.input';
import { PermissionCreateNestedOneWithoutRolesInput } from '../permission/permission-create-nested-one-without-roles.input';

@InputType()
export class PermissionsOnRolesCreateInput {

    @Field(() => RoleCreateNestedOneWithoutPermissionsInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutPermissionsInput;

    @Field(() => PermissionCreateNestedOneWithoutRolesInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutRolesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
