import { PrismaClient } from '@prisma/client';
import { Permission } from '../@generated/permission/permission.model';

export async function seedRoles(
  prisma: PrismaClient,
  permissions: { super: Permission },
) {
  const admin = await prisma.role.upsert({
    create: {
      name: 'ADMIN',
      permissions: {
        createMany: {
          data: [{ permissionId: permissions.super.id }],
          skipDuplicates: true,
        },
      },
    },
    update: {
      name: 'ADMIN',
      permissions: {
        createMany: {
          data: [{ permissionId: permissions.super.id }],
          skipDuplicates: true,
        },
      },
    },
    where: {
      name: 'ADMIN',
    },
  });

  const user = await prisma.role.upsert({
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

  return [admin, user];
}
