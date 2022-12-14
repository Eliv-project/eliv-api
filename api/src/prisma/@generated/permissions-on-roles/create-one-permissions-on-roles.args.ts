import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsOnRolesCreateInput } from './permissions-on-roles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePermissionsOnRolesArgs {

    @Field(() => PermissionsOnRolesCreateInput, {nullable:false})
    @Type(() => PermissionsOnRolesCreateInput)
    data!: PermissionsOnRolesCreateInput;
}
