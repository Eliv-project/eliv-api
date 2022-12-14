import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsOnRolesUpdateInput } from './permissions-on-roles-update.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesWhereUniqueInput } from './permissions-on-roles-where-unique.input';

@ArgsType()
export class UpdateOnePermissionsOnRolesArgs {

    @Field(() => PermissionsOnRolesUpdateInput, {nullable:false})
    @Type(() => PermissionsOnRolesUpdateInput)
    data!: PermissionsOnRolesUpdateInput;

    @Field(() => PermissionsOnRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    where!: PermissionsOnRolesWhereUniqueInput;
}
