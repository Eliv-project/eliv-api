import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';
import { UserSubscriptionCreateNestedManyWithoutUserInput } from '../user-subscription/user-subscription-create-nested-many-without-user.input';
import { UserSubscriptionCreateNestedManyWithoutSubscribingUserInput } from '../user-subscription/user-subscription-create-nested-many-without-subscribing-user.input';
import { OAuthLinkCreateNestedManyWithoutUserInput } from '../o-auth-link/o-auth-link-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { VoteCreateNestedManyWithoutUserInput } from '../vote/vote-create-nested-many-without-user.input';
import { ViewCreateNestedManyWithoutUserInput } from '../view/view-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutVideosInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    gender?: boolean;

    @Field(() => String, {nullable:true})
    name?: string;

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

    @Field(() => UserSubscriptionCreateNestedManyWithoutUserInput, {nullable:true})
    subscribingUsers?: UserSubscriptionCreateNestedManyWithoutUserInput;

    @Field(() => UserSubscriptionCreateNestedManyWithoutSubscribingUserInput, {nullable:true})
    subscribers?: UserSubscriptionCreateNestedManyWithoutSubscribingUserInput;

    @Field(() => OAuthLinkCreateNestedManyWithoutUserInput, {nullable:true})
    oauthLinks?: OAuthLinkCreateNestedManyWithoutUserInput;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutUserInput;

    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: VoteCreateNestedManyWithoutUserInput;

    @Field(() => ViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: ViewCreateNestedManyWithoutUserInput;

    @HideField()
    verified?: boolean;
}
