import { PrismaClient, Role, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export function seedUsers(prisma: PrismaClient, roles: { admin: Role }) {
  const admin = prisma.user.upsert({
    create: {
      email: 'dnntung@gmail.com',
      gender: true,
      password: bcrypt.hashSync('admin', 10),
      username: 'admin',
      role: {
        connect: {
          name: roles.admin.name,
        },
      },
    },
    update: {
      email: 'dnntung@gmail.com',
      gender: true,
      password: bcrypt.hashSync('admin', 10),
      username: 'admin',
      role: {
        connect: {
          name: roles.admin.name,
        },
      },
    },
    where: {
      username: 'admin',
    },
  });

  const user = prisma.user.upsert({
    create: {
      email: 'test_user@eliv.dev',
      gender: true,
      password: bcrypt.hashSync('test_user', 10),
      username: 'test_user',
      role: {
        connect: {
          name: roles.admin.name,
        },
      },
    },
    update: {
      email: 'test_user@eliv.dev',
      gender: true,
      password: bcrypt.hashSync('test_user', 10),
      username: 'test_user',
      role: {
        connect: {
          name: roles.admin.name,
        },
      },
    },
    where: {
      username: 'test_user',
    },
  });

  return Promise.all([admin, user]);
}
