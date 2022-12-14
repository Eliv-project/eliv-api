import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesRoleIdPermissionIdCompoundUniqueInput } from './permissions-on-roles-role-id-permission-id-compound-unique.input';

@InputType()
export class PermissionsOnRolesWhereUniqueInput {

    @Field(() => PermissionsOnRolesRoleIdPermissionIdCompoundUniqueInput, {nullable:true})
    roleId_permissionId?: PermissionsOnRolesRoleIdPermissionIdCompoundUniqueInput;
}
