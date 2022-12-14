import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVideosInput } from './user-create-without-videos.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVideosInput } from './user-create-or-connect-without-videos.input';
import { UserUpsertWithoutVideosInput } from './user-upsert-without-videos.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutVideosInput } from './user-update-without-videos.input';

@InputType()
export class UserUpdateOneRequiredWithoutVideosNestedInput {

    @Field(() => UserCreateWithoutVideosInput, {nullable:true})
    @Type(() => UserCreateWithoutVideosInput)
    create?: UserCreateWithoutVideosInput;

    @Field(() => UserCreateOrConnectWithoutVideosInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVideosInput)
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput;

    @Field(() => UserUpsertWithoutVideosInput, {nullable:true})
    @Type(() => UserUpsertWithoutVideosInput)
    upsert?: UserUpsertWithoutVideosInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutVideosInput, {nullable:true})
    @Type(() => UserUpdateWithoutVideosInput)
    update?: UserUpdateWithoutVideosInput;
}
