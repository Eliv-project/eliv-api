import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOauthLinkInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
