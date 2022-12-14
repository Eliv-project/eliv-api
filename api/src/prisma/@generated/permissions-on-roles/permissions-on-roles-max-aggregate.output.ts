import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PermissionsOnRolesMaxAggregate {

    @Field(() => Int, {nullable:true})
    roleId?: number;

    @Field(() => Int, {nullable:true})
    permissionId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
