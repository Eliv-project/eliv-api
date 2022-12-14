import { registerEnumType } from '@nestjs/graphql';

export enum PermissionsOnRolesScalarFieldEnum {
    roleId = "roleId",
    permissionId = "permissionId",
    createdAt = "createdAt"
}


registerEnumType(PermissionsOnRolesScalarFieldEnum, { name: 'PermissionsOnRolesScalarFieldEnum', description: undefined })
