import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LiveChatMessagesService {
  constructor(private prisma: PrismaService) {}

  create(args: Prisma.LiveChatMessageCreateArgs) {
    return this.prisma.liveChatMessage.create(args);
  }

  findAll(args: Prisma.LiveChatMessageFindManyArgs) {
    return this.prisma.liveChatMessage.findMany(args);
  }

  findOne(args: Prisma.LiveChatMessageFindUniqueArgs) {
    return this.prisma.liveChatMessage.findUnique(args);
  }

  count(where: Prisma.LiveChatMessageWhereInput) {
    return this.prisma.liveChatMessage.count({ where });
  }

  update(
    where: Prisma.LiveChatMessageWhereUniqueInput,
    data: Prisma.LiveChatMessageUpdateInput,
  ) {
    return this.prisma.liveChatMessage.update({ where, data });
  }

  remove(args: Prisma.LiveChatMessageDeleteArgs) {
    return this.prisma.liveChatMessage.delete(args);
  }
}
