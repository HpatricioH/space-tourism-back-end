const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getOneCrewMembers = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const singleCrewMember = await prisma.crew.findMany({
      where: {id: id},
    });
    res.status(200).json(singleCrewMember);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getOneCrewMembers,
};
