const { crews } = require('./DB Data/crews.js');
const { destinations } = require('./DB Data/destination.js');
const { technologies } = require('./DB Data/technologies.js');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  for (let crew of crews) {
    await prisma.crew.create({
      data: crew,
    });
  }

  for (let destinationInfo of destinations) {
    await prisma.destinations.create({
      data: destinationInfo,
    });
  }

  for (let technology of technologies) {
    await prisma.technology.create({
      data: technology,
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
