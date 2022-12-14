import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesCreateManyRoleInput } from './permissions-on-roles-create-many-role.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionsOnRolesCreateManyRoleInputEnvelope {

    @Field(() => [PermissionsOnRolesCreateManyRoleInput], {nullable:false})
    @Type(() => PermissionsOnRolesCreateManyRoleInput)
    data!: Array<PermissionsOnRolesCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
