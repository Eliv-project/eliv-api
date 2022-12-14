import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PermissionsOnRolesUncheckedCreateWithoutPermissionInput {

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
