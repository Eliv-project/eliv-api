import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesWhereUniqueInput } from './permissions-on-roles-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesUpdateWithoutPermissionInput } from './permissions-on-roles-update-without-permission.input';

@InputType()
export class PermissionsOnRolesUpdateWithWhereUniqueWithoutPermissionInput {

    @Field(() => PermissionsOnRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    where!: PermissionsOnRolesWhereUniqueInput;

    @Field(() => PermissionsOnRolesUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => PermissionsOnRolesUpdateWithoutPermissionInput)
    data!: PermissionsOnRolesUpdateWithoutPermissionInput;
}
