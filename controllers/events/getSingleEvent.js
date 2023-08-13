import { Prisma } from "@prisma/client";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import prisma from "../../lib/prisma";

const getSingleEvent = async (req, res) => {
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
    return res.status(StatusCodes.OK).json({ events: events });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      console.error(error);
  } finally {
    await prisma.$disconnect();
  }
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ status: StatusCodes.NOT_FOUND, error: ReasonPhrases.NOT_FOUND });
};

export default getSingleEvent;
