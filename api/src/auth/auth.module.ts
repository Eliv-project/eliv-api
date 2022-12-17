import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthResolver } from './auth.resolver';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { OAuthLinksService } from 'src/oauth-links/oauth-links.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({})],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
    AuthResolver,
    PrismaService,
    JwtRefreshStrategy,
    OAuthLinksService,
  ],
})
export class AuthModule {}
