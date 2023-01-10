import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVodSessionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
