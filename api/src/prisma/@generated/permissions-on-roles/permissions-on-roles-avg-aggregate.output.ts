import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PermissionsOnRolesAvgAggregate {

    @Field(() => Float, {nullable:true})
    roleId?: number;

    @Field(() => Float, {nullable:true})
    permissionId?: number;
}
