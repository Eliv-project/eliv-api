import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesCreateWithoutPermissionInput } from './permissions-on-roles-create-without-permission.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesCreateOrConnectWithoutPermissionInput } from './permissions-on-roles-create-or-connect-without-permission.input';
import { PermissionsOnRolesCreateManyPermissionInputEnvelope } from './permissions-on-roles-create-many-permission-input-envelope.input';
import { PermissionsOnRolesWhereUniqueInput } from './permissions-on-roles-where-unique.input';

@InputType()
export class PermissionsOnRolesUncheckedCreateNestedManyWithoutPermissionInput {

    @Field(() => [PermissionsOnRolesCreateWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsOnRolesCreateWithoutPermissionInput)
    create?: Array<PermissionsOnRolesCreateWithoutPermissionInput>;

    @Field(() => [PermissionsOnRolesCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsOnRolesCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<PermissionsOnRolesCreateOrConnectWithoutPermissionInput>;

    @Field(() => PermissionsOnRolesCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => PermissionsOnRolesCreateManyPermissionInputEnvelope)
    createMany?: PermissionsOnRolesCreateManyPermissionInputEnvelope;

    @Field(() => [PermissionsOnRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    connect?: Array<PermissionsOnRolesWhereUniqueInput>;
}
