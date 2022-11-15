const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getSingleTechnology = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const getOneTechnology = await prisma.technology.findMany({
      where: { id: id },
    });
    res.status(200).json(getOneTechnology);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = { getSingleTechnology };
