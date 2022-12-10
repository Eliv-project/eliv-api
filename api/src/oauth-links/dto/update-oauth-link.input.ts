import { CreateOauthLinkInput } from './create-oauth-link.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOauthLinkInput extends PartialType(CreateOauthLinkInput) {
  @Field(() => Int)
  id: number;
}
