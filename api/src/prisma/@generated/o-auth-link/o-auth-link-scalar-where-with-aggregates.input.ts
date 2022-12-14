import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class OAuthLinkScalarWhereWithAggregatesInput {

    @Field(() => [OAuthLinkScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OAuthLinkScalarWhereWithAggregatesInput>;

    @Field(() => [OAuthLinkScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OAuthLinkScalarWhereWithAggregatesInput>;

    @Field(() => [OAuthLinkScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OAuthLinkScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    provider?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    providerId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;
}
