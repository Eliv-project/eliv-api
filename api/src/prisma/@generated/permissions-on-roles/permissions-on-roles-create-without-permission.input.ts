import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutPermissionsInput } from '../role/role-create-nested-one-without-permissions.input';

@InputType()
export class PermissionsOnRolesCreateWithoutPermissionInput {

    @Field(() => RoleCreateNestedOneWithoutPermissionsInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutPermissionsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
