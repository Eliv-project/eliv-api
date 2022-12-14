import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class OAuthLinkWhereInput {

    @Field(() => [OAuthLinkWhereInput], {nullable:true})
    AND?: Array<OAuthLinkWhereInput>;

    @Field(() => [OAuthLinkWhereInput], {nullable:true})
    OR?: Array<OAuthLinkWhereInput>;

    @Field(() => [OAuthLinkWhereInput], {nullable:true})
    NOT?: Array<OAuthLinkWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    provider?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    providerId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
