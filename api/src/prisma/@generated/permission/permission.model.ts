import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PermissionsOnRoles } from '../permissions-on-roles/permissions-on-roles.model';
import { PermissionCount } from './permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [PermissionsOnRoles], {nullable:true})
    roles?: Array<PermissionsOnRoles>;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
