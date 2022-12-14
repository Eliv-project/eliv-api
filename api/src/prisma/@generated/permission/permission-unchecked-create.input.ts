import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionsOnRolesUncheckedCreateNestedManyWithoutPermissionInput } from '../permissions-on-roles/permissions-on-roles-unchecked-create-nested-many-without-permission.input';

@InputType()
export class PermissionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PermissionsOnRolesUncheckedCreateNestedManyWithoutPermissionInput, {nullable:true})
    roles?: PermissionsOnRolesUncheckedCreateNestedManyWithoutPermissionInput;
}
