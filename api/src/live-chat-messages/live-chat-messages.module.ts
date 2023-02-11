import { Module } from '@nestjs/common';
import { LiveChatMessagesService } from './live-chat-messages.service';
import { LiveChatMessagesResolver } from './live-chat-messages.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { LiveSessionsService } from 'src/live-sessions/live-sessions.service';

@Module({
  providers: [
    LiveChatMessagesResolver,
    LiveChatMessagesService,
    PrismaService,
    LiveSessionsService,
  ],
})
export class LiveChatMessagesModule {}
