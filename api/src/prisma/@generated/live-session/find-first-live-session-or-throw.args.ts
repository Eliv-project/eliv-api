import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LiveSessionWhereInput } from './live-session-where.input';
import { Type } from 'class-transformer';
import { LiveSessionOrderByWithRelationInput } from './live-session-order-by-with-relation.input';
import { LiveSessionWhereUniqueInput } from './live-session-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LiveSessionScalarFieldEnum } from './live-session-scalar-field.enum';

@ArgsType()
export class FindFirstLiveSessionOrThrowArgs {

    @Field(() => LiveSessionWhereInput, {nullable:true})
    @Type(() => LiveSessionWhereInput)
    where?: LiveSessionWhereInput;

    @Field(() => [LiveSessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LiveSessionOrderByWithRelationInput>;

    @Field(() => LiveSessionWhereUniqueInput, {nullable:true})
    cursor?: LiveSessionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LiveSessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LiveSessionScalarFieldEnum>;
}
