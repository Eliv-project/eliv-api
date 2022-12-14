import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesCreateWithoutRoleInput } from './permissions-on-roles-create-without-role.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesCreateOrConnectWithoutRoleInput } from './permissions-on-roles-create-or-connect-without-role.input';
import { PermissionsOnRolesUpsertWithWhereUniqueWithoutRoleInput } from './permissions-on-roles-upsert-with-where-unique-without-role.input';
import { PermissionsOnRolesCreateManyRoleInputEnvelope } from './permissions-on-roles-create-many-role-input-envelope.input';
import { PermissionsOnRolesWhereUniqueInput } from './permissions-on-roles-where-unique.input';
import { PermissionsOnRolesUpdateWithWhereUniqueWithoutRoleInput } from './permissions-on-roles-update-with-where-unique-without-role.input';
import { PermissionsOnRolesUpdateManyWithWhereWithoutRoleInput } from './permissions-on-roles-update-many-with-where-without-role.input';
import { PermissionsOnRolesScalarWhereInput } from './permissions-on-roles-scalar-where.input';

@InputType()
export class PermissionsOnRolesUncheckedUpdateManyWithoutRoleNestedInput {

    @Field(() => [PermissionsOnRolesCreateWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsOnRolesCreateWithoutRoleInput)
    create?: Array<PermissionsOnRolesCreateWithoutRoleInput>;

    @Field(() => [PermissionsOnRolesCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsOnRolesCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<PermissionsOnRolesCreateOrConnectWithoutRoleInput>;

    @Field(() => [PermissionsOnRolesUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsOnRolesUpsertWithWhereUniqueWithoutRoleInput)
    upsert?: Array<PermissionsOnRolesUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => PermissionsOnRolesCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => PermissionsOnRolesCreateManyRoleInputEnvelope)
    createMany?: PermissionsOnRolesCreateManyRoleInputEnvelope;

    @Field(() => [PermissionsOnRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    set?: Array<PermissionsOnRolesWhereUniqueInput>;

    @Field(() => [PermissionsOnRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    disconnect?: Array<PermissionsOnRolesWhereUniqueInput>;

    @Field(() => [PermissionsOnRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    delete?: Array<PermissionsOnRolesWhereUniqueInput>;

    @Field(() => [PermissionsOnRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    connect?: Array<PermissionsOnRolesWhereUniqueInput>;

    @Field(() => [PermissionsOnRolesUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsOnRolesUpdateWithWhereUniqueWithoutRoleInput)
    update?: Array<PermissionsOnRolesUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [PermissionsOnRolesUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsOnRolesUpdateManyWithWhereWithoutRoleInput)
    updateMany?: Array<PermissionsOnRolesUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [PermissionsOnRolesScalarWhereInput], {nullable:true})
    @Type(() => PermissionsOnRolesScalarWhereInput)
    deleteMany?: Array<PermissionsOnRolesScalarWhereInput>;
}
