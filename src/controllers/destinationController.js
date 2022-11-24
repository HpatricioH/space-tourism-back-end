const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllDestinations = async (req, res) => {
  try {
    const getOneDestination = await prisma.destinations.findMany();
    res.status(200).json(getOneDestination);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getAllDestinations,
};
