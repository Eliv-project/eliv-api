import { ForbiddenException } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { ConfigService } from '@nestjs/config';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/prisma/@generated/user/user.model';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { IsPublic } from './decorators/is-public/is-public.decorator';
import { LoginInput } from './dto/login-input.dto';
import { LoginResponse } from './dto/login-response.dto';
import { RefreshTokensResponse } from './dto/refresh-tokens-response.dto';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';
import { JwtPayload } from './types/jwt-payload.type';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation((returns) => LoginResponse)
  @IsPublic()
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginInput') loginInput: LoginInput /** Define it on graphql */,
    @CurrentUser() currentUser,
  ): LoginResponse {
    // if (!currentUser) {
    //   throw new UnauthorizedException('INVALID_LOGIN');
    // }

    const payload: JwtPayload = {
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
      email: currentUser.email,
      username: currentUser.username,
    };

    return {
      ...this.authService.getTokensWithExp(payload),
    };
  }
}
