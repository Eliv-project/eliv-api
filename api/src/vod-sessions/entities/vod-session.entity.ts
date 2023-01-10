import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class VodSession {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
