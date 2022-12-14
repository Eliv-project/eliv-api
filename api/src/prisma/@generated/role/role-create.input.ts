import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesCreateNestedManyWithoutRoleInput } from '../permissions-on-roles/permissions-on-roles-create-nested-many-without-role.input';
import { UserCreateNestedManyWithoutRoleInput } from '../user/user-create-nested-many-without-role.input';

@InputType()
export class RoleCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PermissionsOnRolesCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionsOnRolesCreateNestedManyWithoutRoleInput;

    @Field(() => UserCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: UserCreateNestedManyWithoutRoleInput;
}
