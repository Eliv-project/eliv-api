import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class OAuthLink {
  @Field((type) => User)
  user: User;

  @Field()
  provider: string;

  @Field()
  providerId: string;
}
