import { Test, TestingModule } from '@nestjs/testing';
import { PermissionsOnRolesService } from './permissions-on-roles.service';

describe('PermissionsOnRolesService', () => {
  let service: PermissionsOnRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionsOnRolesService],
    }).compile();

    service = module.get<PermissionsOnRolesService>(PermissionsOnRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
