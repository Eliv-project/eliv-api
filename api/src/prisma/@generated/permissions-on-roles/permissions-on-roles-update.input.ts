import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateOneRequiredWithoutPermissionsNestedInput } from '../role/role-update-one-required-without-permissions-nested.input';
import { PermissionUpdateOneRequiredWithoutRolesNestedInput } from '../permission/permission-update-one-required-without-roles-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PermissionsOnRolesUpdateInput {

    @Field(() => RoleUpdateOneRequiredWithoutPermissionsNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput;

    @Field(() => PermissionUpdateOneRequiredWithoutRolesNestedInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
