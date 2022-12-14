import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PermissionRelationFilter } from '../permission/permission-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PermissionsOnRolesWhereInput {

    @Field(() => [PermissionsOnRolesWhereInput], {nullable:true})
    AND?: Array<PermissionsOnRolesWhereInput>;

    @Field(() => [PermissionsOnRolesWhereInput], {nullable:true})
    OR?: Array<PermissionsOnRolesWhereInput>;

    @Field(() => [PermissionsOnRolesWhereInput], {nullable:true})
    NOT?: Array<PermissionsOnRolesWhereInput>;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => PermissionRelationFilter, {nullable:true})
    permission?: PermissionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    permissionId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
