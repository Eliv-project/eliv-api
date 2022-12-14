import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class OAuthLinkUncheckedUpdateManyWithoutOauthLinksInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    provider?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    providerId?: StringFieldUpdateOperationsInput;
}
