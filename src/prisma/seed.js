const { crew } = require('./DB Data/crew.js');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  for (let crewMembers of crew) {
    await prisma.crew.create({
      data: crewMembers,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
