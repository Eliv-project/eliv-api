import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PermissionsOnRolesScalarWhereInput {

    @Field(() => [PermissionsOnRolesScalarWhereInput], {nullable:true})
    AND?: Array<PermissionsOnRolesScalarWhereInput>;

    @Field(() => [PermissionsOnRolesScalarWhereInput], {nullable:true})
    OR?: Array<PermissionsOnRolesScalarWhereInput>;

    @Field(() => [PermissionsOnRolesScalarWhereInput], {nullable:true})
    NOT?: Array<PermissionsOnRolesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    permissionId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
