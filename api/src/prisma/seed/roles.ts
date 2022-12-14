import { PrismaClient } from '@prisma/client';
import Permissions from 'src/constants/permissions';

export function seedRoles(prisma: PrismaClient) {
  const admin = prisma.role.upsert({
    create: {
      name: 'ADMIN',
      permissions: {
        connectOrCreate: {
          create: {
            permission: {
              connectOrCreate: {
                create: {
                  name: 'SUPER',
                },
                where: {
                  name: 'SUPER',
                },
              },
            },
          },
          where: {
            roleId_permissionId: {
              roleId: 1,
              permissionId: 1,
            },
          },
        },
      },
    },
    update: {
      name: 'ADMIN',
      permissions: {
        connectOrCreate: {
          create: {
            permission: {
              connectOrCreate: {
                create: {
                  name: 'SUPER',
                },
                where: {
                  name: 'SUPER',
                },
              },
            },
          },
          where: {
            roleId_permissionId: {
              roleId: 1,
              permissionId: 1,
            },
          },
        },
      },
    },
    where: {
      name: 'ADMIN',
    },
  });

  return Promise.all([admin]);
}
