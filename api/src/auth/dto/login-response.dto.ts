import { Field, ObjectType, PickType } from '@nestjs/graphql';
import { User } from 'src/prisma/@generated/user/user.model';

@ObjectType()
class UserAuthInfo extends PickType(User, ['email', 'username']) {}

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field()
  expiresAt: number;

  @Field((type) => UserAuthInfo)
  user: UserAuthInfo;
}
