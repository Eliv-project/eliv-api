import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Permission } from 'src/permissions/entities/permission.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Role {
  // @Field(() => ID)
  // id: number;

  @Field()
  name: string;

  @Field((type) => [Permission])
  permissions: Permission[];

  @Field((type) => [User])
  users: User[];
}
