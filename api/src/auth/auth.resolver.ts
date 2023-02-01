import { UseGuards } from '@nestjs/common/decorators';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/prisma/@generated/user/user.model';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { IsPublic } from './decorators/is-public.decorator';
import { CredentialsInput } from './dto/credentials-input.dto';
import { LoginResponse } from './dto/login-response.dto';
import { OAuthInput } from './dto/oauth-input.dto';
import { RefreshTokensResponse } from './dto/refresh-tokens-response.dto';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';
import { JwtPayload } from './types/jwt-payload.type';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation((returns) => LoginResponse)
  @IsPublic()
  async oauthLogin(
    @Args('loginInput') loginInput: OAuthInput,
  ): Promise<LoginResponse> {
    const currentUser = await this.authService.validateLinkedUser(loginInput);

    const payload: JwtPayload = {
      id: currentUser.id,
      email: currentUser.email,
      username: currentUser.username,
    };

    return {
      ...this.authService.getTokensWithExp(payload),
      user: currentUser,
    };
  }

  @Mutation((returns) => LoginResponse)
  async jwtLogin(@CurrentUser() currentUser: User) {
    const payload: JwtPayload = {
      id: currentUser.id,
      email: currentUser.email,
      username: currentUser.username,
    };

    return {
      ...this.authService.getTokensWithExp(payload),
      user: currentUser,
    };
  }

  @Mutation((returns) => LoginResponse)
  @IsPublic()
  @UseGuards(GqlAuthGuard)
  credentialsLogin(
    @Args('loginInput')
    loginInput: CredentialsInput /** Define it on graphql */,
    @CurrentUser() currentUser,
  ): LoginResponse {
    // if (!currentUser) {
    //   throw new UnauthorizedException('INVALID_LOGIN');
    // }

    const payload: JwtPayload = {
      id: currentUser.id,
      email: currentUser.email,
      username: currentUser.username,
    };

    return {
      ...this.authService.getTokensWithExp(payload),
      user: currentUser,
    };
  }

  @Mutation((returns) => RefreshTokensResponse)
  @IsPublic()
  @UseGuards(JwtRefreshAuthGuard)
  refreshTokens(@CurrentUser() currentUser): RefreshTokensResponse {
    const payload: JwtPayload = {
      id: currentUser.id,
      email: currentUser.email,
      username: currentUser.username,
    };

    return {
      ...this.authService.getTokensWithExp(payload),
    };
  }
}
