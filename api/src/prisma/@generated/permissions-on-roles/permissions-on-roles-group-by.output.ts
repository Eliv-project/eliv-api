import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionsOnRolesCountAggregate } from './permissions-on-roles-count-aggregate.output';
import { PermissionsOnRolesAvgAggregate } from './permissions-on-roles-avg-aggregate.output';
import { PermissionsOnRolesSumAggregate } from './permissions-on-roles-sum-aggregate.output';
import { PermissionsOnRolesMinAggregate } from './permissions-on-roles-min-aggregate.output';
import { PermissionsOnRolesMaxAggregate } from './permissions-on-roles-max-aggregate.output';

@ObjectType()
export class PermissionsOnRolesGroupBy {

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => PermissionsOnRolesCountAggregate, {nullable:true})
    _count?: PermissionsOnRolesCountAggregate;

    @Field(() => PermissionsOnRolesAvgAggregate, {nullable:true})
    _avg?: PermissionsOnRolesAvgAggregate;

    @Field(() => PermissionsOnRolesSumAggregate, {nullable:true})
    _sum?: PermissionsOnRolesSumAggregate;

    @Field(() => PermissionsOnRolesMinAggregate, {nullable:true})
    _min?: PermissionsOnRolesMinAggregate;

    @Field(() => PermissionsOnRolesMaxAggregate, {nullable:true})
    _max?: PermissionsOnRolesMaxAggregate;
}
