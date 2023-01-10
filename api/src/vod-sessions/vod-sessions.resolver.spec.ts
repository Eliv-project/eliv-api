import { Test, TestingModule } from '@nestjs/testing';
import { VodSessionsResolver } from './vod-sessions.resolver';
import { VodSessionsService } from './vod-sessions.service';

describe('VodSessionsResolver', () => {
  let resolver: VodSessionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VodSessionsResolver, VodSessionsService],
    }).compile();

    resolver = module.get<VodSessionsResolver>(VodSessionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
