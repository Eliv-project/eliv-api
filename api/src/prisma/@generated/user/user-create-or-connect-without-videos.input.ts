import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVideosInput } from './user-create-without-videos.input';

@InputType()
export class UserCreateOrConnectWithoutVideosInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutVideosInput, {nullable:false})
    @Type(() => UserCreateWithoutVideosInput)
    create!: UserCreateWithoutVideosInput;
}
