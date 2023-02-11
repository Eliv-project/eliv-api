import { Test, TestingModule } from '@nestjs/testing';
import { StreamKeysService } from './stream-keys.service';

describe('StreamKeysService', () => {
  let service: StreamKeysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamKeysService],
    }).compile();

    service = module.get<StreamKeysService>(StreamKeysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
