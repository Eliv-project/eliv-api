import { Test, TestingModule } from '@nestjs/testing';
import { VodSessionsService } from './vod-sessions.service';

describe('VodSessionsService', () => {
  let service: VodSessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VodSessionsService],
    }).compile();

    service = module.get<VodSessionsService>(VodSessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
