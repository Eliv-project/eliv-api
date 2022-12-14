import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { Int } from '@nestjs/graphql';
import { Permission } from '../permission/permission.model';

@ObjectType()
export class PermissionsOnRoles {

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Permission, {nullable:false})
    permission?: Permission;

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
