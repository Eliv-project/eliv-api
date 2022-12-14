import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateOneRequiredWithoutRolesNestedInput } from '../permission/permission-update-one-required-without-roles-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PermissionsOnRolesUpdateWithoutRoleInput {

    @Field(() => PermissionUpdateOneRequiredWithoutRolesNestedInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
