import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    gender = "gender",
    name = "name",
    password = "password",
    avatar = "avatar",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    roleId = "roleId",
    verified = "verified",
    onLive = "onLive"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
