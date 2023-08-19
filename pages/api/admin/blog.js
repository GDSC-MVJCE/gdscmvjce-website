// /api/post.ts <= override default handler for specific resource

import prisma from "@/lib/prisma";
import {
  createHandler,
  defaultHandler,
  getOneHandler,
  updateHandler
} from "ra-data-simple-prisma";

export default function handler(req, res) {
  switch (req.body.method) {
    case "create":
      createHandler(req, res, prisma["blog"], {
        connect: {
          tags: "id"
        }
      });
      break;
    case "update":
      updateHandler(req, res, prisma["blog"], {
        set: {
          tags: "id"
        }
      });
      break;
    case "getOne":
      getOneHandler(req, res, prisma["blog"], {
        include: {
          tags: true
        },
        transform: (blog) => {
          blog.tags = blog.tags.map((tag) => tag.id);
          return blog;
        }
      });
      break;
    default: // <= fall back on default handler
      defaultHandler(req, res, prisma);
      break;
  }
}
