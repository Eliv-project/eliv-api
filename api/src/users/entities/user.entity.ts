import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-scalars';
import { OAuthLink } from 'src/oauth-links/entities/oauth-link.entity';
import { Role } from 'src/roles/entities/role.entity';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  username: string;

  @Field({ nullable: true })
  password?: string;

  @Field()
  email: string;

  @Field((type) => GraphQLJSON, { nullable: true })
  avatar?: JSON;

  @Field((type) => [Role], { nullable: true })
  role?: Role;

  @Field((type) => [OAuthLink])
  oauthLinks?: OAuthLink[];
}
