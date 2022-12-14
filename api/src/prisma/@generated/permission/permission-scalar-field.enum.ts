import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined })
