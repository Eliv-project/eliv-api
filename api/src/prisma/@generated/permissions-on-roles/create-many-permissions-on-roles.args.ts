import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsOnRolesCreateManyInput } from './permissions-on-roles-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPermissionsOnRolesArgs {

    @Field(() => [PermissionsOnRolesCreateManyInput], {nullable:false})
    @Type(() => PermissionsOnRolesCreateManyInput)
    data!: Array<PermissionsOnRolesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
