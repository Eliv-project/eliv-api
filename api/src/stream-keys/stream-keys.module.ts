import { Module } from '@nestjs/common';
import { StreamKeysService } from './stream-keys.service';
import { StreamKeysResolver } from './stream-keys.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [StreamKeysResolver, StreamKeysService, PrismaService],
})
export class StreamKeysModule {}
