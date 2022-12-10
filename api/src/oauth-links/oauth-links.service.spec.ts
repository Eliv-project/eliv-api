import { Test, TestingModule } from '@nestjs/testing';
import { OauthLinksService } from './oauth-links.service';

describe('OauthLinksService', () => {
  let service: OauthLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OauthLinksService],
    }).compile();

    service = module.get<OauthLinksService>(OauthLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
