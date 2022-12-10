import { CreatePermissionsOnRoleInput } from './create-permissions-on-role.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePermissionsOnRoleInput extends PartialType(CreatePermissionsOnRoleInput) {
  @Field(() => Int)
  id: number;
}
