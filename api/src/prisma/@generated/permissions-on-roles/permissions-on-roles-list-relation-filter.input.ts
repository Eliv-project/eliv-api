import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesWhereInput } from './permissions-on-roles-where.input';

@InputType()
export class PermissionsOnRolesListRelationFilter {

    @Field(() => PermissionsOnRolesWhereInput, {nullable:true})
    every?: PermissionsOnRolesWhereInput;

    @Field(() => PermissionsOnRolesWhereInput, {nullable:true})
    some?: PermissionsOnRolesWhereInput;

    @Field(() => PermissionsOnRolesWhereInput, {nullable:true})
    none?: PermissionsOnRolesWhereInput;
}
