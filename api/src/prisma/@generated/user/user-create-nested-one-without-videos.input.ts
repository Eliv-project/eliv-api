import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVideosInput } from './user-create-without-videos.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVideosInput } from './user-create-or-connect-without-videos.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutVideosInput {

    @Field(() => UserCreateWithoutVideosInput, {nullable:true})
    @Type(() => UserCreateWithoutVideosInput)
    create?: UserCreateWithoutVideosInput;

    @Field(() => UserCreateOrConnectWithoutVideosInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVideosInput)
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
