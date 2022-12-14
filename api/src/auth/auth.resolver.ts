import { UseGuards } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/prisma/@generated/user/user.model';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { IsPublic } from './decorators/is-public/is-public.decorator';
import { LoginInputDto } from './dto/login-input.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { JwtPayload } from './types/jwt-payload.type';

@Resolver()
export class AuthResolver {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private authService: AuthService,
  ) {}

  @Mutation((returns) => LoginResponseDto)
  @IsPublic()
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginInput') loginInput: LoginInputDto /** Define it on graphql */,
    @CurrentUser() currentUser: User,
  ): LoginResponseDto {
    const { accessKey, refreshKey, accessKeyExpiration, refreshKeyExpiration } =
      this.configService.get('jwt');
    const payload: JwtPayload = {
      email: currentUser.email,
      username: currentUser.username,
    };

    return {
      accessToken: this.jwtService.sign(payload, {
        secret: accessKey,
        expiresIn: accessKeyExpiration,
      }),
      refreshToken: this.jwtService.sign(payload, {
        secret: refreshKey,
        expiresIn: refreshKeyExpiration,
      }),
      user: currentUser,
    };
  }
}
