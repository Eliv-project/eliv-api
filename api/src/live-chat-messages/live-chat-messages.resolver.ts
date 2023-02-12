import { NotFoundException } from '@nestjs/common';
import { Inject, UseGuards } from '@nestjs/common/decorators/index';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Subscription,
  Int,
} from '@nestjs/graphql';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { SubscriptionEvents } from 'src/common/constants/subscription-events.constant';
import { LiveSessionsService } from 'src/live-sessions/live-sessions.service';
import { LiveChatMessageCreateInput } from 'src/prisma/@generated/live-chat-message/live-chat-message-create.input';
import { LiveChatMessageOrderByWithRelationInput } from 'src/prisma/@generated/live-chat-message/live-chat-message-order-by-with-relation.input';
import { LiveChatMessageWhereUniqueInput } from 'src/prisma/@generated/live-chat-message/live-chat-message-where-unique.input';
import { LiveChatMessageWhereInput } from 'src/prisma/@generated/live-chat-message/live-chat-message-where.input';
import { LiveChatMessage } from 'src/prisma/@generated/live-chat-message/live-chat-message.model';
import { LiveSessionWhereUniqueInput } from 'src/prisma/@generated/live-session/live-session-where-unique.input';
import { User } from 'src/prisma/@generated/user/user.model';
import { PUB_SUB } from 'src/pub-sub/pub-sub.module';
import { LiveChatChangeData } from './dto/live-chat-change-data.dto';
import { LiveChatMessagesService } from './live-chat-messages.service';
import { Prisma } from '@prisma/client';

@Resolver(() => LiveChatMessage)
export class LiveChatMessagesResolver {
  constructor(
    private readonly liveChatMessagesService: LiveChatMessagesService,
    private readonly liveSessionsService: LiveSessionsService,
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
  ) {}

  @Mutation(() => LiveChatMessage)
  async createLiveChatMessage(
    @Args('data') data: LiveChatMessageCreateInput,
    @CurrentUser() me: User,
  ) {
    const newLiveChatMessage = await this.liveChatMessagesService.create({
      data: {
        liveSession: (data as Prisma.LiveChatMessageCreateInput).liveSession,
        content: (data as Prisma.LiveChatMessageCreateInput).content,
        user: {
          connect: {
            id: me.id,
          },
        },
      },
      include: { user: true, liveSession: { select: { id: true } } },
    });
    this.pubSub.publish<{ watchLiveChatChange: LiveChatChangeData }>(
      [SubscriptionEvents.LIVE_CHAT, newLiveChatMessage.liveSessionId].join(
        '_',
      ),
      {
        watchLiveChatChange: {
          type: 'create',
          data: newLiveChatMessage,
        },
      },
    );

    return newLiveChatMessage;
  }

  @Query(() => [LiveChatMessage], { name: 'liveChatMessages' })
  findAll(
    @Args('where') where: LiveChatMessageWhereInput,
    @Args('orderBy', {
      type: () => [LiveChatMessageOrderByWithRelationInput],
      nullable: true,
    })
    orderBy: LiveChatMessageOrderByWithRelationInput[],
    @Args('take', { type: () => Int, nullable: true }) take: number,
  ) {
    return this.liveChatMessagesService.findAll({
      where,
      take,
      orderBy: orderBy || [],
      include: { user: true },
    });
  }

  @Query(() => LiveChatMessage, { name: 'liveChatMessage' })
  findOne(@Args('where') where: LiveChatMessageWhereUniqueInput) {
    return this.liveChatMessagesService.findOne({ where });
  }

  // @Mutation(() => LiveChatMessage)
  // updateLiveChatMessage(
  //   @Args('where') where: LiveChatMessageWhereUniqueInput,
  //   @Args('data') data: LiveChatMessageUpdateInput,
  // ) {
  //   return this.liveChatMessagesService.update(where, data);
  // }

  @Mutation(() => LiveChatMessage)
  async removeLiveChatMessage(
    @Args('where') where: LiveChatMessageWhereUniqueInput,
  ) {
    const deletedLiveChatMessage = await this.liveChatMessagesService.remove({
      where,
      include: { liveSession: { select: { id: true } }, user: true },
    });

    this.pubSub.publish<{ watchLiveChatChange: LiveChatChangeData }>(
      [SubscriptionEvents.LIVE_CHAT, deletedLiveChatMessage.liveSessionId].join(
        '_',
      ),
      {
        watchLiveChatChange: { type: 'delete', data: deletedLiveChatMessage },
      },
    );

    return deletedLiveChatMessage;
  }

  @IsPublic()
  @Subscription(() => LiveChatMessage)
  async watchNewLiveChat(
    @Args('where') liveSessionWhere: LiveSessionWhereUniqueInput,
  ) {
    const liveSession = await this.liveSessionsService.findOne(
      liveSessionWhere,
    );
    if (!liveSession) {
      throw new NotFoundException('LIVE_SESSION_NOT_FOUND');
    }

    console.log('Watching chat creation at live session', liveSession.id);

    return this.pubSub.asyncIterator(
      [SubscriptionEvents.NEW_LIVE_CHAT_MESSAGE, liveSession.id].join('_'),
    );
  }

  @IsPublic()
  @Subscription(() => LiveChatChangeData)
  async watchLiveChatChange(
    @Args('where') liveSessionWhere: LiveSessionWhereUniqueInput,
  ) {
    const liveSession = await this.liveSessionsService.findOne(
      liveSessionWhere,
    );
    if (!liveSession) {
      throw new NotFoundException('LIVE_SESSION_NOT_FOUND');
    }

    console.log('Watching chat at live session', liveSession.id);

    return this.pubSub.asyncIterator(
      [SubscriptionEvents.LIVE_CHAT, liveSession.id].join('_'),
    );
  }
}
