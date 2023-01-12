import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserSubscriptionUncheckedCreateNestedManyWithoutSubscribingUserInput } from '../user-subscription/user-subscription-unchecked-create-nested-many-without-subscribing-user.input';
import { UserSubscriptionUncheckedCreateNestedManyWithoutUserInput } from '../user-subscription/user-subscription-unchecked-create-nested-many-without-user.input';
import { OAuthLinkUncheckedCreateNestedManyWithoutUserInput } from '../o-auth-link/o-auth-link-unchecked-create-nested-many-without-user.input';
import { VideoUncheckedCreateNestedManyWithoutUserInput } from '../video/video-unchecked-create-nested-many-without-user.input';
import { CommentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';
import { VoteUncheckedCreateNestedManyWithoutUserInput } from '../vote/vote-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutRoleInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => UserSubscriptionUncheckedCreateNestedManyWithoutSubscribingUserInput, {nullable:true})
    subscribingUsers?: UserSubscriptionUncheckedCreateNestedManyWithoutSubscribingUserInput;

    @Field(() => UserSubscriptionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    subscribers?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => OAuthLinkUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    oauthLinks?: OAuthLinkUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => VideoUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput;
}
