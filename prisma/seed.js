const { PrismaClient } = require("@prisma/client");
const { Speaker, Event } = require("./GDSC - Event List2");

const prisma = new PrismaClient();

const load = async () => {
  try {
    // await prisma.event.deleteMany();
    // await prisma.speaker.deleteMany();
    // await prisma.event.createMany({
    //   data: Event,
    // });
    // console.log("Events Created");
    // await prisma.speaker.createMany({
    //   data: Speaker,
    // })
    // console.log("Speakers Created");
    console.log("Seeding script");
  } catch (error) {
    console.error(error.message);
  } finally {
    await prisma.$disconnect();
  }
};

load();
