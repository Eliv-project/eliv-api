import { Field, InputType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@InputType()
export class LoginInputDto {
  @Field()
  usernameOrEmail: string;

  @Field()
  password: string;
}
