import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PermissionsOnRoles } from '../permissions-on-roles/permissions-on-roles.model';
import { User } from '../user/user.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [PermissionsOnRoles], {nullable:true})
    permissions?: Array<PermissionsOnRoles>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
