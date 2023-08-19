// /api/post.ts <= override default handler for specific resource

import prisma from "@/lib/prisma";
import {
  createHandler,
  defaultHandler,
  getOneHandler,
  updateHandler
} from "ra-data-simple-prisma";

export default async function handler(req, res) {
  console.log(req.body.tags);
  switch (req.body.method) {
    case "create":
      await createHandler(req, res, prisma["event"], {
        connect: {
          tags: "id",
          speakers: "id"
        }
      });
      break;
    case "update":
      await updateHandler(req, res, prisma["event"], {
        set: {
          tags: "id",
          speakers: "id"
        }
      });
      break;
    case "getOne":
      await getOneHandler(req, res, prisma["event"], {
        include: {
          tags: true,
          speakers: true
        },
        transform: (event) => {
          event.tags = event.tags.map((tag) => tag.id);
          event.speakers = event.speakers.map((speaker) => speaker.id);
          return event;
        }
      });

    default: // <= fall back on default handler
      await defaultHandler(req, res, prisma);
      break;
  }
}
