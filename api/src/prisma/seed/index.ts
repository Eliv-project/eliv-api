import { PrismaClient } from '@prisma/client';
import { seedPermissions } from './permissions';
import { seedRoles } from './roles';
import { seedUsers } from './users';
const prisma = new PrismaClient();
async function main() {
  const [superPermission, ...permissions] = await seedPermissions(prisma);

  console.log(`Seeded ${permissions.length + 1} permissions`);

  const [adminRole, userRole] = await seedRoles(prisma, {
    super: superPermission,
  });
  const [adminUser, users] = await seedUsers(prisma, {
    admin: adminRole,
    user: userRole,
  });

  console.log(`Seeding completed 1 admin and ${users.length} users!`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
