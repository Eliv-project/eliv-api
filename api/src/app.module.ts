import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
import { VodSessionsModule } from './vod-sessions/vod-sessions.module';
import { CommentsModule } from './comments/comments.module';
import { VotesModule } from './votes/votes.module';
import { UserSubscriptionsModule } from './user-subscriptions/user-subscriptions.module';
import { ViewsModule } from './views/views.module';
import { StreamKeysModule } from './stream-keys/stream-keys.module';
import { LiveChatMessagesModule } from './live-chat-messages/live-chat-messages.module';
import { FfmpegService } from './ffmpeg/ffmpeg.service';
import { ViewersModule } from './viewers/viewers.module';
import ffmpegConfig from './config/ffmpeg.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod'],
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      cache: true,
      isGlobal: true,
      load: [globalConfig, jwtConfig, pathConfig, ffmpegConfig],
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
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        redis: {
          host: configService.get('redis').host,
          port: configService.get('redis').port,
        },
      }),
      inject: [ConfigService],
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
    VodSessionsModule,
    CommentsModule,
    VotesModule,
    UserSubscriptionsModule,
    ViewsModule,
    StreamKeysModule,
    LiveChatMessagesModule,
    ViewersModule,
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
    FfmpegService,
  ],
})
export class AppModule {}
