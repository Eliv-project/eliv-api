import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionsOnRolesUncheckedCreateNestedManyWithoutRoleInput } from '../permissions-on-roles/permissions-on-roles-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PermissionsOnRolesUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionsOnRolesUncheckedCreateNestedManyWithoutRoleInput;
}
