import { GET_FAVOURITE_BY_USER_ID } from "@/actions/favourite";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.AUTH_SECRET });
  if (session?.sub) {
    try {
      const { favourites, total } = await GET_FAVOURITE_BY_USER_ID(session?.sub);

      if (total > 0) {
        return NextResponse.json({ favourites, total, status: 200 });
      } else {
        return NextResponse.json({ message: 'No Favourites product', status: 404 });
      }
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Unaothorized', status: 401 });
  }
}
