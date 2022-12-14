import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesCreateWithoutPermissionInput } from './permissions-on-roles-create-without-permission.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesCreateOrConnectWithoutPermissionInput } from './permissions-on-roles-create-or-connect-without-permission.input';
import { PermissionsOnRolesUpsertWithWhereUniqueWithoutPermissionInput } from './permissions-on-roles-upsert-with-where-unique-without-permission.input';
import { PermissionsOnRolesCreateManyPermissionInputEnvelope } from './permissions-on-roles-create-many-permission-input-envelope.input';
import { PermissionsOnRolesWhereUniqueInput } from './permissions-on-roles-where-unique.input';
import { PermissionsOnRolesUpdateWithWhereUniqueWithoutPermissionInput } from './permissions-on-roles-update-with-where-unique-without-permission.input';
import { PermissionsOnRolesUpdateManyWithWhereWithoutPermissionInput } from './permissions-on-roles-update-many-with-where-without-permission.input';
import { PermissionsOnRolesScalarWhereInput } from './permissions-on-roles-scalar-where.input';

@InputType()
export class PermissionsOnRolesUpdateManyWithoutPermissionNestedInput {

    @Field(() => [PermissionsOnRolesCreateWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsOnRolesCreateWithoutPermissionInput)
    create?: Array<PermissionsOnRolesCreateWithoutPermissionInput>;

    @Field(() => [PermissionsOnRolesCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsOnRolesCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<PermissionsOnRolesCreateOrConnectWithoutPermissionInput>;

    @Field(() => [PermissionsOnRolesUpsertWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsOnRolesUpsertWithWhereUniqueWithoutPermissionInput)
    upsert?: Array<PermissionsOnRolesUpsertWithWhereUniqueWithoutPermissionInput>;

    @Field(() => PermissionsOnRolesCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => PermissionsOnRolesCreateManyPermissionInputEnvelope)
    createMany?: PermissionsOnRolesCreateManyPermissionInputEnvelope;

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

    @Field(() => [PermissionsOnRolesUpdateWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsOnRolesUpdateWithWhereUniqueWithoutPermissionInput)
    update?: Array<PermissionsOnRolesUpdateWithWhereUniqueWithoutPermissionInput>;

    @Field(() => [PermissionsOnRolesUpdateManyWithWhereWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsOnRolesUpdateManyWithWhereWithoutPermissionInput)
    updateMany?: Array<PermissionsOnRolesUpdateManyWithWhereWithoutPermissionInput>;

    @Field(() => [PermissionsOnRolesScalarWhereInput], {nullable:true})
    @Type(() => PermissionsOnRolesScalarWhereInput)
    deleteMany?: Array<PermissionsOnRolesScalarWhereInput>;
}
