import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginInputDto {
  @Field()
  usernameOrEmail: string;

  @Field()
  password: string;
}
