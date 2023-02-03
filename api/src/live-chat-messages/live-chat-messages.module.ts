import { Module } from '@nestjs/common';
import { LiveChatMessagesService } from './live-chat-messages.service';
import { LiveChatMessagesResolver } from './live-chat-messages.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [LiveChatMessagesResolver, LiveChatMessagesService, PrismaService],
})
export class LiveChatMessagesModule {}
