import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CredentialsInput {
  @Field()
  usernameOrEmail: string;

  @Field()
  password: string;
}
