import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const eventGet = async (req, res) => {
  const { eventId } = req.query;
  try {
    const events = await prisma.event.findUnique({
      where: {
        id: eventId,
      },
      include: {
        speakers: {
          select: {
            id: true,
            name: true,
            image: true,
            title: true,
            description: true,
            profileLink: true,
          },
        },
        tags: {
          select: {
            id: true,
            label: true,
            slug: true,
          },
        },
        gallery: {
          select: {
            id: true,
            title: true,
            url: true,
            date: true,
          },
        },
      },
    });
    return res.status(200).json({ events: events });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
  res.status(400).json({ message: "data not found" });
};

export default eventGet;
