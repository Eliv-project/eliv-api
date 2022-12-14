import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutRolesInput } from '../permission/permission-create-nested-one-without-roles.input';

@InputType()
export class PermissionsOnRolesCreateWithoutRoleInput {

    @Field(() => PermissionCreateNestedOneWithoutRolesInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutRolesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
