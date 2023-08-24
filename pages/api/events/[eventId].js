import getSingleEvent from "@/controllers/events/getSingleEvent";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await getSingleEvent(req, res);
  } else {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
      status: StatusCodes.METHOD_NOT_ALLOWED,
      error: ReasonPhrases.METHOD_NOT_ALLOWED
    });
  }
}
