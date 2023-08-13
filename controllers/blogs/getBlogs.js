import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const getBlogs = async (req, res) => {
  const { type, page } = req.query;
  const pageNo = Number(page);
  try {
    const events = await prisma.blog.findMany({
      where: {
        tags: {
          some: {
            label: type,
          },
        },
      },
      skip: (pageNo - 1) * 3,
    });
    return res.status(StatusCodes.OK).json({ blogs });
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

export default getBlogs;
