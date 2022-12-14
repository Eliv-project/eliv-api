import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutUsersNestedInput } from '../role/role-update-one-required-without-users-nested.input';
import { OAuthLinkUpdateManyWithoutUserNestedInput } from '../o-auth-link/o-auth-link-update-many-without-user-nested.input';
import { VideoUpdateManyWithoutUserNestedInput } from '../video/video-update-many-without-user-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    gender?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    avatar?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => OAuthLinkUpdateManyWithoutUserNestedInput, {nullable:true})
    oauthLinks?: OAuthLinkUpdateManyWithoutUserNestedInput;

    @Field(() => VideoUpdateManyWithoutUserNestedInput, {nullable:true})
    videos?: VideoUpdateManyWithoutUserNestedInput;
}
