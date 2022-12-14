import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsOnRolesWhereInput } from './permissions-on-roles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPermissionsOnRolesArgs {

    @Field(() => PermissionsOnRolesWhereInput, {nullable:true})
    @Type(() => PermissionsOnRolesWhereInput)
    where?: PermissionsOnRolesWhereInput;
}
