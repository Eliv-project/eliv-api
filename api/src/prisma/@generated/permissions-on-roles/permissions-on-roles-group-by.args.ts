import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsOnRolesWhereInput } from './permissions-on-roles-where.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesOrderByWithAggregationInput } from './permissions-on-roles-order-by-with-aggregation.input';
import { PermissionsOnRolesScalarFieldEnum } from './permissions-on-roles-scalar-field.enum';
import { PermissionsOnRolesScalarWhereWithAggregatesInput } from './permissions-on-roles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PermissionsOnRolesCountAggregateInput } from './permissions-on-roles-count-aggregate.input';
import { PermissionsOnRolesAvgAggregateInput } from './permissions-on-roles-avg-aggregate.input';
import { PermissionsOnRolesSumAggregateInput } from './permissions-on-roles-sum-aggregate.input';
import { PermissionsOnRolesMinAggregateInput } from './permissions-on-roles-min-aggregate.input';
import { PermissionsOnRolesMaxAggregateInput } from './permissions-on-roles-max-aggregate.input';

@ArgsType()
export class PermissionsOnRolesGroupByArgs {

    @Field(() => PermissionsOnRolesWhereInput, {nullable:true})
    @Type(() => PermissionsOnRolesWhereInput)
    where?: PermissionsOnRolesWhereInput;

    @Field(() => [PermissionsOnRolesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PermissionsOnRolesOrderByWithAggregationInput>;

    @Field(() => [PermissionsOnRolesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PermissionsOnRolesScalarFieldEnum>;

    @Field(() => PermissionsOnRolesScalarWhereWithAggregatesInput, {nullable:true})
    having?: PermissionsOnRolesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PermissionsOnRolesCountAggregateInput, {nullable:true})
    _count?: PermissionsOnRolesCountAggregateInput;

    @Field(() => PermissionsOnRolesAvgAggregateInput, {nullable:true})
    _avg?: PermissionsOnRolesAvgAggregateInput;

    @Field(() => PermissionsOnRolesSumAggregateInput, {nullable:true})
    _sum?: PermissionsOnRolesSumAggregateInput;

    @Field(() => PermissionsOnRolesMinAggregateInput, {nullable:true})
    _min?: PermissionsOnRolesMinAggregateInput;

    @Field(() => PermissionsOnRolesMaxAggregateInput, {nullable:true})
    _max?: PermissionsOnRolesMaxAggregateInput;
}
