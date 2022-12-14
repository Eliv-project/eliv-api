import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsOnRolesWhereUniqueInput } from './permissions-on-roles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePermissionsOnRolesArgs {

    @Field(() => PermissionsOnRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsOnRolesWhereUniqueInput)
    where!: PermissionsOnRolesWhereUniqueInput;
}
