import { Injectable } from '@nestjs/common';
import { FindManyLiveChatMessageArgs } from 'src/prisma/@generated/live-chat-message/find-many-live-chat-message.args';
import { FindUniqueLiveChatMessageArgs } from 'src/prisma/@generated/live-chat-message/find-unique-live-chat-message.args';
import { LiveChatMessageCreateInput } from 'src/prisma/@generated/live-chat-message/live-chat-message-create.input';
import { LiveChatMessageUpdateInput } from 'src/prisma/@generated/live-chat-message/live-chat-message-update.input';
import { LiveChatMessageWhereUniqueInput } from 'src/prisma/@generated/live-chat-message/live-chat-message-where-unique.input';
import { LiveChatMessageWhereInput } from 'src/prisma/@generated/live-chat-message/live-chat-message-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LiveChatMessagesService {
  constructor(private prisma: PrismaService) {}

  create(data: LiveChatMessageCreateInput) {
    return this.prisma.liveChatMessage.create({ data });
  }

  findAll(args: FindManyLiveChatMessageArgs) {
    return this.prisma.liveChatMessage.findMany(args);
  }

  findOne(args: FindUniqueLiveChatMessageArgs) {
    return this.prisma.liveChatMessage.findUnique(args);
  }

  count(where: LiveChatMessageWhereInput) {
    return this.prisma.liveChatMessage.count({ where });
  }

  update(
    where: LiveChatMessageWhereUniqueInput,
    data: LiveChatMessageUpdateInput,
  ) {
    return this.prisma.liveChatMessage.update({ where, data });
  }

  remove(where: LiveChatMessageWhereUniqueInput) {
    return this.prisma.liveChatMessage.delete({ where });
  }
}
