import { Module } from '@nestjs/common';
import { VodSessionsService } from './vod-sessions.service';
import { VodSessionsResolver } from './vod-sessions.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [VodSessionsResolver, VodSessionsService, PrismaService],
})
export class VodSessionsModule {}
