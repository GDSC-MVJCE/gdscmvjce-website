// /api/post.ts <= override default handler for specific resource

import prisma from "@/lib/prisma";
import {
  createHandler,
  defaultHandler,
  updateHandler,
} from "ra-data-simple-prisma";

export default async function handler(req, res) {
  console.log(req.body.tags);
  switch (req.body.method) {
    case "create":
      await createHandler(req, res, prisma["event"], {
        connect: {
          tags: "id",
          speakers: "id",
        },
      });
      break;
    case "update":
      await updateHandler(req, res, prisma["event"], {
        connect: {
          tags: "id",
          speakers: "id",
        },
      });

    default: // <= fall back on default handler
      await defaultHandler(req, res, prisma);
      break;
  }
}
