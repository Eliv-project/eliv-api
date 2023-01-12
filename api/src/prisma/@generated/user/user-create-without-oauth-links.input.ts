import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';
import { UserSubscriptionCreateNestedManyWithoutSubscribingUserInput } from '../user-subscription/user-subscription-create-nested-many-without-subscribing-user.input';
import { UserSubscriptionCreateNestedManyWithoutUserInput } from '../user-subscription/user-subscription-create-nested-many-without-user.input';
import { VideoCreateNestedManyWithoutUserInput } from '../video/video-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { VoteCreateNestedManyWithoutUserInput } from '../vote/vote-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutOauthLinksInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    gender?: boolean;

    @HideField()
    password!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    avatar?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUsersInput;

    @Field(() => UserSubscriptionCreateNestedManyWithoutSubscribingUserInput, {nullable:true})
    subscribingUsers?: UserSubscriptionCreateNestedManyWithoutSubscribingUserInput;

    @Field(() => UserSubscriptionCreateNestedManyWithoutUserInput, {nullable:true})
    subscribers?: UserSubscriptionCreateNestedManyWithoutUserInput;

    @Field(() => VideoCreateNestedManyWithoutUserInput, {nullable:true})
    videos?: VideoCreateNestedManyWithoutUserInput;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutUserInput;

    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: VoteCreateNestedManyWithoutUserInput;
}
