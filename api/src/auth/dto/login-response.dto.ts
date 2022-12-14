import { Field, ObjectType, PickType } from '@nestjs/graphql';
import { User } from 'src/prisma/@generated/user/user.model';

@ObjectType()
class UserDto extends PickType(User, ['email', 'username']) {}

@ObjectType()
export class LoginResponseDto {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field((type) => UserDto)
  user: UserDto;
}
