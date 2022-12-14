import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PermissionsOnRolesUpdateManyWithoutPermissionNestedInput } from '../permissions-on-roles/permissions-on-roles-update-many-without-permission-nested.input';

@InputType()
export class PermissionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionsOnRolesUpdateManyWithoutPermissionNestedInput, {nullable:true})
    roles?: PermissionsOnRolesUpdateManyWithoutPermissionNestedInput;
}
