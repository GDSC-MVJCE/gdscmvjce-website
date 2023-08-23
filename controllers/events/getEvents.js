import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const getEvents = async (req, res) => {
  const { type, page } = req.query;
  const pageNo = page ? parseInt(page) : 1;
  const eventPerPage = 3;
  try {
    const events = await prisma.event.findMany({
      where: {
        tags: {
          some: {
            slug: type
          }
        }
      },
      orderBy: [
        {
          startDate: "desc"
        }
      ],
      include: {
        speakers: {
          select: {
            id: true,
            name: true,
            image: true,
            title: true,
            description: true,
            profileLink: true
          }
        },
        tags: {
          select: {
            id: true,
            label: true,
            slug: true
          }
        },
        gallery: {
          select: {
            id: true,
            title: true,
            url: true,
            date: true
          }
        }
      },
      skip: (pageNo - 1) * eventPerPage,
      take: eventPerPage
    });
    return res.status(StatusCodes.OK).json(events);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      console.error(error);
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ status: StatusCodes.NOT_FOUND, error: ReasonPhrases.NOT_FOUND });
};

export default getEvents;
