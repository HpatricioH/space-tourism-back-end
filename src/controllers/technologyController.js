const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllTechnology = async (req, res) => {
  try {
    const getOneTechnology = await prisma.technology.findMany();
    res.status(200).json(getOneTechnology);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = { getAllTechnology };
