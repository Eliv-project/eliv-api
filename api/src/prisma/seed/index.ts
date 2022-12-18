import { PrismaClient } from '@prisma/client';
import { seedPermissions } from './permissions';
import { seedRoles } from './roles';
import { seedUsers } from './users';
const prisma = new PrismaClient();
async function main() {
  const [superPermission, ...permissions] = await seedPermissions(prisma);

  console.log(`Seeded ${permissions.length + 1} permissions`);

  const [adminRole] = await seedRoles(prisma, { super: superPermission });
  const [adminUser] = await seedUsers(prisma, { admin: adminRole });

  console.log('Seeding completed!', adminUser);
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
