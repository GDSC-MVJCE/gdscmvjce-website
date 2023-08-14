import { Prisma } from "@prisma/client";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import prisma from "../../lib/prisma";

const getSingleBlog = async (req, res) => {
  const { blogId } = req.query;
  try {
    const blogs = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            username: true,
            image: true,
          },
        },
        tags: {
          select: {
            id: true,
            label: true,
            slug: true,
          },
        },
      },
    });
    return res.status(StatusCodes.OK).json({ blogs: blogs });
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

export default getSingleBlog;
