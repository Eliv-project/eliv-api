import { Test, TestingModule } from '@nestjs/testing';
import { LiveChatMessagesResolver } from './live-chat-messages.resolver';
import { LiveChatMessagesService } from './live-chat-messages.service';

describe('LiveChatMessagesResolver', () => {
  let resolver: LiveChatMessagesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveChatMessagesResolver, LiveChatMessagesService],
    }).compile();

    resolver = module.get<LiveChatMessagesResolver>(LiveChatMessagesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
