// /api/post.ts <= override default handler for specific resource

import prisma from "@/lib/prisma";
import {
  createHandler,
  defaultHandler,
  getOneHandler,
  updateHandler,
} from "ra-data-simple-prisma";

export default async function handler(req, res) {
  console.log(req.body.method);
  switch (req.body.method) {
    case "create":
      await createHandler(req, res, prisma["blog"], {
        connect: {
          tags: "id",
        },
      });
      break;
    case "update":
      await updateHandler(req, res, prisma["blog"], {
        connect: {
          tags: "id",
        },
      });
      break;
    case "getOne":
      console.log(req.body.method);
      await getOneHandler(req, res, prisma["blog"], {
        connect: {
          tags: "id",
        },
      });

    default: // <= fall back on default handler
      await defaultHandler(req, res, prisma);
      break;
  }
}
