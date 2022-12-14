import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PermissionsOnRolesCountAggregate {

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
