import { Test, TestingModule } from '@nestjs/testing';
import { PermissionsOnRolesResolver } from './permissions-on-roles.resolver';
import { PermissionsOnRolesService } from './permissions-on-roles.service';

describe('PermissionsOnRolesResolver', () => {
  let resolver: PermissionsOnRolesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionsOnRolesResolver, PermissionsOnRolesService],
    }).compile();

    resolver = module.get<PermissionsOnRolesResolver>(PermissionsOnRolesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
