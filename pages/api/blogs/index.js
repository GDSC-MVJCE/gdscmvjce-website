import getBlogs from "@/controllers/blogs/getBlogs";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await getBlogs(req, res);
  } else {
    return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
      status: StatusCodes.METHOD_NOT_ALLOWED,
      error: ReasonPhrases.METHOD_NOT_ALLOWED,
    });
  }
}
