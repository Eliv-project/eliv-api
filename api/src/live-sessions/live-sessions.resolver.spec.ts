import { Test, TestingModule } from '@nestjs/testing';
import { LiveSessionsResolver } from './live-sessions.resolver';
import { LiveSessionsService } from './live-sessions.service';

describe('LiveSessionsResolver', () => {
  let resolver: LiveSessionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveSessionsResolver, LiveSessionsService],
    }).compile();

    resolver = module.get<LiveSessionsResolver>(LiveSessionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
