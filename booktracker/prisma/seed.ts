import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const tempUser =await prisma.users.create({
    data: {
      email: 'test@example.com',
      username: 'Test User',
      password_hash: 'dummy_hash_for_testing',
    },
  })

  console.log('Seed data created.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
