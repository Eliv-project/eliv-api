import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthLinkCreateWithoutUserInput } from './o-auth-link-create-without-user.input';
import { Type } from 'class-transformer';
import { OAuthLinkCreateOrConnectWithoutUserInput } from './o-auth-link-create-or-connect-without-user.input';
import { OAuthLinkCreateManyUserInputEnvelope } from './o-auth-link-create-many-user-input-envelope.input';
import { OAuthLinkWhereUniqueInput } from './o-auth-link-where-unique.input';

@InputType()
export class OAuthLinkCreateNestedManyWithoutUserInput {

    @Field(() => [OAuthLinkCreateWithoutUserInput], {nullable:true})
    @Type(() => OAuthLinkCreateWithoutUserInput)
    create?: Array<OAuthLinkCreateWithoutUserInput>;

    @Field(() => [OAuthLinkCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OAuthLinkCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OAuthLinkCreateOrConnectWithoutUserInput>;

    @Field(() => OAuthLinkCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OAuthLinkCreateManyUserInputEnvelope)
    createMany?: OAuthLinkCreateManyUserInputEnvelope;

    @Field(() => [OAuthLinkWhereUniqueInput], {nullable:true})
    @Type(() => OAuthLinkWhereUniqueInput)
    connect?: Array<OAuthLinkWhereUniqueInput>;
}
