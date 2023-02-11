import { Test, TestingModule } from '@nestjs/testing';
import { LiveChatMessagesService } from './live-chat-messages.service';

describe('LiveChatMessagesService', () => {
  let service: LiveChatMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveChatMessagesService],
    }).compile();

    service = module.get<LiveChatMessagesService>(LiveChatMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
