import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PermissionsOnRolesUncheckedUpdateManyWithoutRoleNestedInput } from '../permissions-on-roles/permissions-on-roles-unchecked-update-many-without-role-nested.input';
import { UserUncheckedUpdateManyWithoutRoleNestedInput } from '../user/user-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionsOnRolesUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissions?: PermissionsOnRolesUncheckedUpdateManyWithoutRoleNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput;
}
