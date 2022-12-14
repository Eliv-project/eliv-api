import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesCreateManyPermissionInput } from './permissions-on-roles-create-many-permission.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionsOnRolesCreateManyPermissionInputEnvelope {

    @Field(() => [PermissionsOnRolesCreateManyPermissionInput], {nullable:false})
    @Type(() => PermissionsOnRolesCreateManyPermissionInput)
    data!: Array<PermissionsOnRolesCreateManyPermissionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
