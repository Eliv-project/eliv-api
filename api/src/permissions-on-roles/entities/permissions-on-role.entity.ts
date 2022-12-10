import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PermissionsOnRole {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
