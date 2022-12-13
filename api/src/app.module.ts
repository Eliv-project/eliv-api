import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import globalConfig from './config/global.config';
import { GraphQLJSON } from 'graphql-scalars';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsOnRolesModule } from './permissions-on-roles/permissions-on-roles.module';
import { OauthLinksModule } from './oauth-links/oauth-links.module';
import jwtConfig from './config/jwt.config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PermissionsGuard } from './permissions/guards/permissions.guard';
import { VideosModule } from './videos/videos.module';
import { LiveSessionsModule } from './live-sessions/live-sessions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [globalConfig, jwtConfig],
    }),
    // Code-first approach
    GraphQLModule.forRoot({
      // Import custom scalars
      resolvers: { JSON: GraphQLJSON },
      driver: ApolloDriver,
      // Generate schema file
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    AuthModule,
    UsersModule,
    PermissionsModule,
    RolesModule,
    OauthLinksModule,
    PermissionsOnRolesModule,
    OauthLinksModule,
    VideosModule,
    LiveSessionsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: PermissionsGuard,
    },
  ],
})
export class AppModule {}
