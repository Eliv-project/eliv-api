import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthLinkCreateWithoutUserInput } from './o-auth-link-create-without-user.input';
import { Type } from 'class-transformer';
import { OAuthLinkCreateOrConnectWithoutUserInput } from './o-auth-link-create-or-connect-without-user.input';
import { OAuthLinkUpsertWithWhereUniqueWithoutUserInput } from './o-auth-link-upsert-with-where-unique-without-user.input';
import { OAuthLinkCreateManyUserInputEnvelope } from './o-auth-link-create-many-user-input-envelope.input';
import { OAuthLinkWhereUniqueInput } from './o-auth-link-where-unique.input';
import { OAuthLinkUpdateWithWhereUniqueWithoutUserInput } from './o-auth-link-update-with-where-unique-without-user.input';
import { OAuthLinkUpdateManyWithWhereWithoutUserInput } from './o-auth-link-update-many-with-where-without-user.input';
import { OAuthLinkScalarWhereInput } from './o-auth-link-scalar-where.input';

@InputType()
export class OAuthLinkUpdateManyWithoutUserNestedInput {

    @Field(() => [OAuthLinkCreateWithoutUserInput], {nullable:true})
    @Type(() => OAuthLinkCreateWithoutUserInput)
    create?: Array<OAuthLinkCreateWithoutUserInput>;

    @Field(() => [OAuthLinkCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OAuthLinkCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OAuthLinkCreateOrConnectWithoutUserInput>;

    @Field(() => [OAuthLinkUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OAuthLinkUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<OAuthLinkUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => OAuthLinkCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OAuthLinkCreateManyUserInputEnvelope)
    createMany?: OAuthLinkCreateManyUserInputEnvelope;

    @Field(() => [OAuthLinkWhereUniqueInput], {nullable:true})
    @Type(() => OAuthLinkWhereUniqueInput)
    set?: Array<OAuthLinkWhereUniqueInput>;

    @Field(() => [OAuthLinkWhereUniqueInput], {nullable:true})
    @Type(() => OAuthLinkWhereUniqueInput)
    disconnect?: Array<OAuthLinkWhereUniqueInput>;

    @Field(() => [OAuthLinkWhereUniqueInput], {nullable:true})
    @Type(() => OAuthLinkWhereUniqueInput)
    delete?: Array<OAuthLinkWhereUniqueInput>;

    @Field(() => [OAuthLinkWhereUniqueInput], {nullable:true})
    @Type(() => OAuthLinkWhereUniqueInput)
    connect?: Array<OAuthLinkWhereUniqueInput>;

    @Field(() => [OAuthLinkUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OAuthLinkUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<OAuthLinkUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [OAuthLinkUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => OAuthLinkUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<OAuthLinkUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [OAuthLinkScalarWhereInput], {nullable:true})
    @Type(() => OAuthLinkScalarWhereInput)
    deleteMany?: Array<OAuthLinkScalarWhereInput>;
}
