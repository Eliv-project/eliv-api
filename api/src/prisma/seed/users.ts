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

  return Promise.all([admin]);
}
