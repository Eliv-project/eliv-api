import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutVideosInput } from './user-update-without-videos.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVideosInput } from './user-create-without-videos.input';

@InputType()
export class UserUpsertWithoutVideosInput {

    @Field(() => UserUpdateWithoutVideosInput, {nullable:false})
    @Type(() => UserUpdateWithoutVideosInput)
    update!: UserUpdateWithoutVideosInput;

    @Field(() => UserCreateWithoutVideosInput, {nullable:false})
    @Type(() => UserCreateWithoutVideosInput)
    create!: UserCreateWithoutVideosInput;
}
