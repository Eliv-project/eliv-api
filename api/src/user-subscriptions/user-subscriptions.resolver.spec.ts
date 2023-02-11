import { Test, TestingModule } from '@nestjs/testing';
import { UserSubscriptionsResolver } from './user-subscriptions.resolver';
import { UserSubscriptionsService } from './user-subscriptions.service';

describe('UserSubscriptionsResolver', () => {
  let resolver: UserSubscriptionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSubscriptionsResolver, UserSubscriptionsService],
    }).compile();

    resolver = module.get<UserSubscriptionsResolver>(UserSubscriptionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
