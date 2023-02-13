import { Test, TestingModule } from '@nestjs/testing';
import { ViewersResolver } from './viewers.resolver';
import { ViewersService } from './viewers.service';

describe('ViewersResolver', () => {
  let resolver: ViewersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewersResolver, ViewersService],
    }).compile();

    resolver = module.get<ViewersResolver>(ViewersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
