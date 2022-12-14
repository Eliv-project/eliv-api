import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PermissionsOnRolesScalarWhereWithAggregatesInput {

    @Field(() => [PermissionsOnRolesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PermissionsOnRolesScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionsOnRolesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PermissionsOnRolesScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionsOnRolesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PermissionsOnRolesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    roleId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    permissionId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
