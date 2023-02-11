import { Test, TestingModule } from '@nestjs/testing';
import { StreamKeysResolver } from './stream-keys.resolver';
import { StreamKeysService } from './stream-keys.service';

describe('StreamKeysResolver', () => {
  let resolver: StreamKeysResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamKeysResolver, StreamKeysService],
    }).compile();

    resolver = module.get<StreamKeysResolver>(StreamKeysResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
