import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

const { hashAPIKey } = require("./lib/createHash");

const apikey = process.env.NEXT_PUBLIC_APIKEY;

export default async function middleware(req) {
  const expectedAPIKey = await hashAPIKey(apikey);
  const receivedAPIKey = await hashAPIKey(req.headers.get("x-api-key"));

  if (expectedAPIKey !== receivedAPIKey) {
    return new NextResponse(
      JSON.stringify({
        status: StatusCodes.UNAUTHORIZED,
        error: ReasonPhrases.UNAUTHORIZED
      }),
      {
        status: StatusCodes.UNAUTHORIZED,
        headers: { "content-type": "application/json" }
      }
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*"
};
