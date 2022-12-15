import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './types/jwt-payload.type';
import { ConfigService } from '@nestjs/config';
import { JwtTokens } from './types/jwt-tokens.type';
import { getTokenExp } from 'src/utils/getTokenExp';
import { LoginInput } from './dto/login-input.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  getTokensWithExp(payload: JwtPayload): JwtTokens {
    // Get secret keys
    const { accessKey, refreshKey, accessKeyExpiry } =
      this.configService.get('jwt');

    // Get accessToken
    const accessToken = this.jwtService.sign(payload, {
      secret: accessKey,
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: refreshKey,
    });

    return {
      accessToken,
      refreshToken,
      expiresAt: getTokenExp(accessKeyExpiry),
    };
  }

  async validateUser(input: LoginInput) {
    const users: (User | null)[] = await Promise.all([
      this.usersService.findOne({
        email: input.usernameOrEmail,
      }),
      this.usersService.findOne({
        username: input.usernameOrEmail,
      }),
    ]);

    const user: User = users.find((user) => !!user);

    if (!user) {
      return null;
    }

    const isMatch = bcrypt.compareSync(input.password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
