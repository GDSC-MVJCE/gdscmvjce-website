// /api/post.ts <= override default handler for specific resource

import prisma from "@/lib/prisma";
import {
  createHandler,
  defaultHandler,
  getOneHandler,
  updateHandler
} from "ra-data-simple-prisma";

export default async function handler(req, res) {
  switch (req.body.method) {
    case "create":
      await createHandler(req, res, prisma["blog"], {
        connect: {
          tags: "id"
        }
      });
      break;
    case "update":
      await updateHandler(req, res, prisma["blog"], {
        connect: {
          tags: "id"
        }
      });
      break;
    case "getOne":
      await getOneHandler(req, res, prisma["blog"], {
        include: {
          tags: true
        },
        transform: (blog) => {
          blog.tags = blog.tags.map((tag) => tag.id);
          return blog;
        }
      });

    default: // <= fall back on default handler
      await defaultHandler(req, res, prisma);
      break;
  }
}
