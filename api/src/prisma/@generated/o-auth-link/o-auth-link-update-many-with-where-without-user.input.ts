import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthLinkScalarWhereInput } from './o-auth-link-scalar-where.input';
import { Type } from 'class-transformer';
import { OAuthLinkUpdateManyMutationInput } from './o-auth-link-update-many-mutation.input';

@InputType()
export class OAuthLinkUpdateManyWithWhereWithoutUserInput {

    @Field(() => OAuthLinkScalarWhereInput, {nullable:false})
    @Type(() => OAuthLinkScalarWhereInput)
    where!: OAuthLinkScalarWhereInput;

    @Field(() => OAuthLinkUpdateManyMutationInput, {nullable:false})
    @Type(() => OAuthLinkUpdateManyMutationInput)
    data!: OAuthLinkUpdateManyMutationInput;
}
