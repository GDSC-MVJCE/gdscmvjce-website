import eventGet from "@/controllers/eventController";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await eventGet(req, res);
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
}
