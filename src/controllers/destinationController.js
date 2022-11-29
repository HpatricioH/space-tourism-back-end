const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getOneDestinations = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const getOneDestination = await prisma.destinations.findMany({
      where: { id: id },
    });
    res.status(200).json(getOneDestination);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getOneDestinations,
};
