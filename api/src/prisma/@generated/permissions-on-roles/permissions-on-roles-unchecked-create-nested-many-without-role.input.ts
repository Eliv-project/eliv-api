import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesCreateWithoutRoleInput } from './permissions-on-roles-create-without-role.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesCreateOrConnectWithoutRoleInput } from './permissions-on-roles-create-or-connect-without-role.input';
import { PermissionsOnRolesCreateManyRoleInputEnvelope } from './permissions-on-roles-create-many-role-input-envelope.input';
import { PermissionsOnRolesWhereUniqueInput } from './permissions-on-roles-where-unique.input';

@InputType()
export class PermissionsOnRolesUncheckedCreateNestedManyWithoutRoleInput {

    @Field(() => [PermissionsOnRolesCreateWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsOnRolesCreateWithoutRoleInput)
    create?: Array<PermissionsOnRolesCreateWithoutRoleInput>;

    @Field(() => [PermissionsOnRolesCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsOnRolesCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<PermissionsOnRolesCreateOrConnectWithoutRoleInput>;

    @Field(() => PermissionsOnRolesCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => PermissionsOnRolesCreateManyRoleInputEnvelope)
    createMany?: PermissionsOnRolesCreateManyRoleInputEnvelope;

    @Field(() => [PermissionsOnRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    connect?: Array<PermissionsOnRolesWhereUniqueInput>;
}
