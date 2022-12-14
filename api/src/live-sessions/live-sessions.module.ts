import { Module } from '@nestjs/common';
import { LiveSessionsService } from './live-sessions.service';
import { LiveSessionsResolver } from './live-sessions.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { LiveSessionsController } from './live-sessions.controller';

@Module({
  providers: [LiveSessionsResolver, LiveSessionsService, PrismaService],
  controllers: [LiveSessionsController],
})
export class LiveSessionsModule {}
