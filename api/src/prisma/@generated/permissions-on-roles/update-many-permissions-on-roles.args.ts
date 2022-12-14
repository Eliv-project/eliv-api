import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsOnRolesUpdateManyMutationInput } from './permissions-on-roles-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesWhereInput } from './permissions-on-roles-where.input';

@ArgsType()
export class UpdateManyPermissionsOnRolesArgs {

    @Field(() => PermissionsOnRolesUpdateManyMutationInput, {nullable:false})
    @Type(() => PermissionsOnRolesUpdateManyMutationInput)
    data!: PermissionsOnRolesUpdateManyMutationInput;

    @Field(() => PermissionsOnRolesWhereInput, {nullable:true})
    @Type(() => PermissionsOnRolesWhereInput)
    where?: PermissionsOnRolesWhereInput;
}
