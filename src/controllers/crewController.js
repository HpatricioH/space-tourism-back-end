const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllCrewMembers = async (req, res) => {
  try {
    const singleCrewMember = await prisma.crew.findMany();
    res.status(200).json(singleCrewMember);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getAllCrewMembers,
};
