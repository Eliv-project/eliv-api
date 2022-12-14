import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesScalarWhereInput } from './permissions-on-roles-scalar-where.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesUpdateManyMutationInput } from './permissions-on-roles-update-many-mutation.input';

@InputType()
export class PermissionsOnRolesUpdateManyWithWhereWithoutPermissionInput {

    @Field(() => PermissionsOnRolesScalarWhereInput, {nullable:false})
    @Type(() => PermissionsOnRolesScalarWhereInput)
    where!: PermissionsOnRolesScalarWhereInput;

    @Field(() => PermissionsOnRolesUpdateManyMutationInput, {nullable:false})
    @Type(() => PermissionsOnRolesUpdateManyMutationInput)
    data!: PermissionsOnRolesUpdateManyMutationInput;
}
