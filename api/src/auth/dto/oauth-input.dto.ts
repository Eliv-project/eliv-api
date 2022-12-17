import { Field, InputType } from '@nestjs/graphql';
import { Provider } from '../enums/provider.enum';

@InputType()
export class OAuthInput {
  @Field()
  provider: Provider;

  @Field()
  providerId: string;

  @Field()
  email: string;

  @Field()
  avatarUrl: string;
}
