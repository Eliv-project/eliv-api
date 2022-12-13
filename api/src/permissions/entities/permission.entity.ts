import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Role } from 'src/roles/entities/role.entity';

@ObjectType()
export class Permission {
  // @Field((type) => ID)
  // id: number;

  @Field()
  name: string;

  @Field((type) => [Role])
  roles: Role[];
}
