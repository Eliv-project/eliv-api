import { Module } from '@nestjs/common';
import { LiveSessionsService } from './live-sessions.service';
import { LiveSessionsResolver } from './live-sessions.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [LiveSessionsResolver, LiveSessionsService, PrismaService],
})
export class LiveSessionsModule {}
