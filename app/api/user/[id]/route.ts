import { GET_USER_BY_ID } from "@/actions/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.pathname;
  const id = params.split("/").at(-1);

  if (req.method === 'GET') {
    try {
      const product = await GET_USER_BY_ID(id as string);

      if (product) {
        return NextResponse.json({ product, status: 200 });
      } else {
        return NextResponse.json({ message: 'User not found', status: 404 });
      }
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed', status: 405 });
  }
}