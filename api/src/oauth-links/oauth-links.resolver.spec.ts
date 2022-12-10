import { Test, TestingModule } from '@nestjs/testing';
import { OauthLinksResolver } from './oauth-links.resolver';
import { OauthLinksService } from './oauth-links.service';

describe('OauthLinksResolver', () => {
  let resolver: OauthLinksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OauthLinksResolver, OauthLinksService],
    }).compile();

    resolver = module.get<OauthLinksResolver>(OauthLinksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
