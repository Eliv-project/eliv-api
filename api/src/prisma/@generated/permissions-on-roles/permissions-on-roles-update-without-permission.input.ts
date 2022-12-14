import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateOneRequiredWithoutPermissionsNestedInput } from '../role/role-update-one-required-without-permissions-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PermissionsOnRolesUpdateWithoutPermissionInput {

    @Field(() => RoleUpdateOneRequiredWithoutPermissionsNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
