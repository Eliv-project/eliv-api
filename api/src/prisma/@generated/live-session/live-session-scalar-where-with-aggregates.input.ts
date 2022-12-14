import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LiveSessionScalarWhereWithAggregatesInput {

    @Field(() => [LiveSessionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LiveSessionScalarWhereWithAggregatesInput>;

    @Field(() => [LiveSessionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LiveSessionScalarWhereWithAggregatesInput>;

    @Field(() => [LiveSessionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LiveSessionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    status?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    streamKey?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    videoId?: IntWithAggregatesFilter;
}
