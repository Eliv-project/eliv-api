import { PrismaClient } from '@prisma/client';

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

  const user = prisma.role.upsert({
    create: {
      name: 'NORMAL_USER',
    },
    update: {
      name: 'NORMAL_USER',
    },
    where: {
      name: 'NORMAL_USER',
    },
  });

  return Promise.all([admin, user]);
}
