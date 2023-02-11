import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './types/jwt-payload.type';
import { ConfigService } from '@nestjs/config';
import { JwtTokens } from './types/jwt-tokens.type';
import { getTokenExp } from 'src/utils/getTokenExp';
import { CredentialsInput } from './dto/credentials-input.dto';
import { OAuthInput } from './dto/oauth-input.dto';
import { ImageProvider } from 'src/common/enums/image-provider.enum';
import { Role } from './enums/role.enum';


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
    const expiresAt = getTokenExp(accessKeyExpiry);

    return {
      accessToken,
      refreshToken,
      expiresAt,
    };
  }

  async validateLinkedUser(input: OAuthInput) {
    const linkedUser = await this.usersService.findOne(
      {
        email: input.email,
      },
      {
        oauthLinks: true,
      },
    );

    if (!linkedUser) {
      const generatedUsername = `${input.provider}:${input.providerId}`;
      const newUser = await this.usersService.create({
        name: input.name,
        email: input.email,
        gender: true,
        password: bcrypt.hashSync(generatedUsername, 10),
        username: generatedUsername,
        avatar: {
          provider: ImageProvider[input.provider],
          data: {
            url: input.avatarUrl,
          },
        },
        oauthLinks: {
          create: [{ provider: input.provider, providerId: input.providerId }],
        },
        role: {
          connect: {
            name: Role.NORMAL_USER,
          },
        },
      });

      return newUser;
    }

    return linkedUser;
  }

  async validateUser(input: CredentialsInput) {
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
