const { PrismaClient } = require("@prisma/client");
const { Speaker, Event } = require("./GDSC - Event List2");
const { Profile } = require("./GDSC 2021-22");

const prisma = new PrismaClient();

const load = async () => {
  try {
    console.log("Seeding script");
  } catch (error) {
    console.error(error.message);
  } finally {
    await prisma.$disconnect();
  }
};

load();
