import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PermissionsOnRolesUncheckedCreateWithoutRoleInput {

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
