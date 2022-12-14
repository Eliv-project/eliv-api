import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsOnRolesWhereUniqueInput } from './permissions-on-roles-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesCreateInput } from './permissions-on-roles-create.input';
import { PermissionsOnRolesUpdateInput } from './permissions-on-roles-update.input';

@ArgsType()
export class UpsertOnePermissionsOnRolesArgs {

    @Field(() => PermissionsOnRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    where!: PermissionsOnRolesWhereUniqueInput;

    @Field(() => PermissionsOnRolesCreateInput, {nullable:false})
    @Type(() => PermissionsOnRolesCreateInput)
    create!: PermissionsOnRolesCreateInput;

    @Field(() => PermissionsOnRolesUpdateInput, {nullable:false})
    @Type(() => PermissionsOnRolesUpdateInput)
    update!: PermissionsOnRolesUpdateInput;
}
