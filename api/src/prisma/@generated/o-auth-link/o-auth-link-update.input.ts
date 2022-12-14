import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutOauthLinksNestedInput } from '../user/user-update-one-required-without-oauth-links-nested.input';

@InputType()
export class OAuthLinkUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    provider?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    providerId?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutOauthLinksNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutOauthLinksNestedInput;
}
