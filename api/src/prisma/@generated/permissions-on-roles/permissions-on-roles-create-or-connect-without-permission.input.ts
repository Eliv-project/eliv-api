import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesWhereUniqueInput } from './permissions-on-roles-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesCreateWithoutPermissionInput } from './permissions-on-roles-create-without-permission.input';

@InputType()
export class PermissionsOnRolesCreateOrConnectWithoutPermissionInput {

    @Field(() => PermissionsOnRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    where!: PermissionsOnRolesWhereUniqueInput;

    @Field(() => PermissionsOnRolesCreateWithoutPermissionInput, {nullable:false})
    @Type(() => PermissionsOnRolesCreateWithoutPermissionInput)
    create!: PermissionsOnRolesCreateWithoutPermissionInput;
}
