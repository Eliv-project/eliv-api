import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePermissionsOnRoleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
