import { PrismaClient } from '@prisma/client';
import Permissions from '../../common/constants/permissions';

export function seedPermissions(prisma: PrismaClient) {
  let queries = [];
  Object.keys(Permissions).map((type) => {
    // Skip super permissions
    if (type === 'super') {
      return;
    }

    queries = [
      ...queries,
      ...Object.values(Permissions[type]).map((permissionName: string) =>
        prisma.permission.upsert({
          create: {
            name: permissionName,
          },
          update: {
            name: permissionName,
          },
          where: {
            name: permissionName,
          },
        }),
      ),
    ];
  });

  return Promise.all([
    prisma.permission.upsert({
      create: {
        name: Permissions.super,
      },
      update: {
        name: Permissions.super,
      },
      where: {
        name: Permissions.super,
      },
    }),
    ...queries,
  ]);
}
