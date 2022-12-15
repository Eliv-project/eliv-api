import { Field, ObjectType, PickType } from '@nestjs/graphql';
import { LoginResponse } from './login-response.dto';

@ObjectType()
export class RefreshTokensResponse extends PickType(LoginResponse, [
  'accessToken',
  'refreshToken',
  'expiresAt',
]) {}
