import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    gender = "gender",
    password = "password",
    avatar = "avatar",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    roleId = "roleId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
