import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class OAuthLinkScalarWhereInput {

    @Field(() => [OAuthLinkScalarWhereInput], {nullable:true})
    AND?: Array<OAuthLinkScalarWhereInput>;

    @Field(() => [OAuthLinkScalarWhereInput], {nullable:true})
    OR?: Array<OAuthLinkScalarWhereInput>;

    @Field(() => [OAuthLinkScalarWhereInput], {nullable:true})
    NOT?: Array<OAuthLinkScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    provider?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    providerId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
