import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { Global, Module } from '@nestjs/common';

export const PUB_SUB = 'PUB_SUB';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: PUB_SUB,
      useFactory: (configService: ConfigService) =>
        new RedisPubSub({
          connection: {
            host: configService.get('redis').host,
            port: configService.get('redis').port,
          },
        }),
      inject: [ConfigService],
    },
  ],
  exports: [PUB_SUB],
})
export class PubSubModule {}
