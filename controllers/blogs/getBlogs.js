import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const getBlogs = async (req, res) => {
  const { type, page } = req.query;
  const pageNo = page ? Number(page) : 1;
  const blogPerPage = 3;
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        tags: {
          some: {
            slug: type
          }
        }
      },
      orderBy: [
        {
          date: "desc"
        }
      ],
      include: {
        author: {
          select: {
            id: true,
            name: true,
            username: true,
            image: true
          }
        },
        tags: {
          select: {
            id: true,
            label: true,
            slug: true
          }
        }
      },
      skip: (pageNo - 1) * blogPerPage,
      take: blogPerPage
    });
    return res.status(StatusCodes.OK).json(blogs);
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
