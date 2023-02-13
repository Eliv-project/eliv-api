import { PrismaClient, Role, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

export async function seedUsers(
  prisma: PrismaClient,
  roles: { admin: Role; user: Role },
) {
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

  const users = [];
  for (let i = 0; i < 2; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    const password = 'test_user';
    const gender = faker.name.sex() === 'male';
    const username = faker.internet.userName(firstName, lastName);
    const name = faker.name.fullName({ firstName, lastName });
    const user = await prisma.user.upsert({
      create: {
        email,
        gender,
        name,
        verified: true,
        password: bcrypt.hashSync(password, 10),
        username,
        role: {
          connect: {
            name: roles.user.name,
          },
        },
      },
      update: {
        email,
        gender,
        name,
        verified: true,
        password: bcrypt.hashSync(password, 10),
        username,
        role: {
          connect: {
            name: roles.user.name,
          },
        },
      },
      where: {
        username,
      },
    });
    users.push(user);
  }

  return Promise.all([admin, users]);
}
