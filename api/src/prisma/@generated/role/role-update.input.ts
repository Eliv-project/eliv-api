import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PermissionsOnRolesUpdateManyWithoutRoleNestedInput } from '../permissions-on-roles/permissions-on-roles-update-many-without-role-nested.input';
import { UserUpdateManyWithoutRoleNestedInput } from '../user/user-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionsOnRolesUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissions?: PermissionsOnRolesUpdateManyWithoutRoleNestedInput;

    @Field(() => UserUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutRoleNestedInput;
}
