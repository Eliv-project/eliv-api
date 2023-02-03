import { NotFoundException } from '@nestjs/common';
import { Inject, UseGuards } from '@nestjs/common/decorators/index';
import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { SubscriptionEvents } from 'src/common/constants/subscription-events.constant';
import { LiveChatMessageCreateInput } from 'src/prisma/@generated/live-chat-message/live-chat-message-create.input';
import { LiveChatMessageWhereUniqueInput } from 'src/prisma/@generated/live-chat-message/live-chat-message-where-unique.input';
import { LiveChatMessageWhereInput } from 'src/prisma/@generated/live-chat-message/live-chat-message-where.input';
import { LiveChatMessage } from 'src/prisma/@generated/live-chat-message/live-chat-message.model';
import { LiveSessionWhereUniqueInput } from 'src/prisma/@generated/live-session/live-session-where-unique.input';
import { PUB_SUB } from 'src/pub-sub/pub-sub.module';
import { LiveChatMessagesService } from './live-chat-messages.service';

@Resolver(() => LiveChatMessage)
export class LiveChatMessagesResolver {
  constructor(
    private readonly liveChatMessagesService: LiveChatMessagesService,
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
  ) {}

  @Mutation(() => LiveChatMessage)
  async createLiveChatMessage(@Args('data') data: LiveChatMessageCreateInput) {
    const newLiveChatMessage = await this.liveChatMessagesService.create(data);
    this.pubSub.publish<{ watchNewLiveChat: LiveChatMessage }>(
      SubscriptionEvents.NEW_LIVE_CHAT_MESSAGE,
      {
        watchNewLiveChat: newLiveChatMessage,
      },
    );
  }

  @Query(() => [LiveChatMessage], { name: 'liveChatMessages' })
  findAll(@Args('where') where: LiveChatMessageWhereInput) {
    return this.liveChatMessagesService.findAll({ where });
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
    const deletedLiveChatMessage = await this.liveChatMessagesService.remove(
      where,
    );

    this.pubSub.publish<{ watchDeletedLiveChat: LiveChatMessage }>(
      SubscriptionEvents.LIVE_CHAT_MSG_DELETED,
      {
        watchDeletedLiveChat: deletedLiveChatMessage,
      },
    );
  }

  @IsPublic()
  @Subscription(() => LiveChatMessage)
  async watchNewLiveChat(
    @Args('where') liveSessionWhere: LiveSessionWhereUniqueInput,
  ) {
    const isExisted = await this.liveChatMessagesService.findOne({
      where: liveSessionWhere,
    });
    if (!isExisted) {
      throw new NotFoundException('LIVE_SESSION_NOT_FOUND');
    }

    return this.pubSub.asyncIterator(
      [SubscriptionEvents.NEW_LIVE_CHAT_MESSAGE, liveSessionWhere.id].join('_'),
    );
  }

  @IsPublic()
  @Subscription(() => LiveChatMessage)
  async watchDeletedLiveChat(
    @Args('where') liveSessionWhere: LiveSessionWhereUniqueInput,
  ) {
    const isExisted = await this.liveChatMessagesService.findOne({
      where: liveSessionWhere,
    });
    if (!isExisted) {
      throw new NotFoundException('LIVE_SESSION_NOT_FOUND');
    }

    return this.pubSub.asyncIterator(
      [SubscriptionEvents.LIVE_CHAT_MSG_DELETED, liveSessionWhere.id].join('_'),
    );
  }
}
