import getSingleBlog from "@/controllers/blogs/getSingleBlog";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await getSingleBlog(req, res);
  } else {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
      status: StatusCodes.METHOD_NOT_ALLOWED,
      error: ReasonPhrases.METHOD_NOT_ALLOWED,
    });
  }
}
