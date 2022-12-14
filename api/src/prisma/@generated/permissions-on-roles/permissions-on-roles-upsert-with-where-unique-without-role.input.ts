import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesWhereUniqueInput } from './permissions-on-roles-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesUpdateWithoutRoleInput } from './permissions-on-roles-update-without-role.input';
import { PermissionsOnRolesCreateWithoutRoleInput } from './permissions-on-roles-create-without-role.input';

@InputType()
export class PermissionsOnRolesUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => PermissionsOnRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    where!: PermissionsOnRolesWhereUniqueInput;

    @Field(() => PermissionsOnRolesUpdateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionsOnRolesUpdateWithoutRoleInput)
    update!: PermissionsOnRolesUpdateWithoutRoleInput;

    @Field(() => PermissionsOnRolesCreateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionsOnRolesCreateWithoutRoleInput)
    create!: PermissionsOnRolesCreateWithoutRoleInput;
}
