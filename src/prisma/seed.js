const { crew } = require('./DB Data/crew.js');
const { PrismaClient } = require('@prisma/client');
const { destinations } = require('./DB Data/destinations.js');
const { technology } = require('./DB Data/technology.js');
const prisma = new PrismaClient();

async function main() {
  for (let crewMembers of crew) {
    await prisma.crew.create({
      data: crewMembers,
    });
  }

  for (let destinationDetails of destinations) {
    await prisma.destinations.crate({
      data: destinationDetails,
    });
  }

  for (let technologyInfo of technology) {
    await prisma.technology.create({
      data: technologyInfo,
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
