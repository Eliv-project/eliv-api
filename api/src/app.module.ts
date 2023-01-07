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
import { UploadService } from './upload/upload.service';
import GraphQLJSON from 'graphql-type-json';
import pathConfig from './config/path.config';
import { BullModule } from '@nestjs/bull';
import { PubSubModule } from './pub-sub/pub-sub.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod'],
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      cache: true,
      isGlobal: true,
      load: [globalConfig, jwtConfig, pathConfig],
    }),
    // Code-first approach
    GraphQLModule.forRoot({
      // Disable upload default feature
      upload: false,
      // Import custom scalars
      resolvers: { JSON: GraphQLJSON },
      driver: ApolloDriver,
      // Generate schema file
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // Enable subscriptions
      subscriptions: {
        'graphql-ws': true,
      },
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
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
    PubSubModule,
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
    UploadService,
  ],
})
export class AppModule {}
