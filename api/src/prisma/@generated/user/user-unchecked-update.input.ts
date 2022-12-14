import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OAuthLinkUncheckedUpdateManyWithoutUserNestedInput } from '../o-auth-link/o-auth-link-unchecked-update-many-without-user-nested.input';
import { VideoUncheckedUpdateManyWithoutUserNestedInput } from '../video/video-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    roleId?: IntFieldUpdateOperationsInput;

    @Field(() => OAuthLinkUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    oauthLinks?: OAuthLinkUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => VideoUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput;
}
