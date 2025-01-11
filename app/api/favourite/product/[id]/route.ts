import { ADD_PRODUCT_TO_fAVOURITE, DELETE_FAVOURITE_BY_PRODUCT_ID } from "@/actions/favourite";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.AUTH_SECRET });
  if (session?.sub) {
    const params = req.nextUrl.pathname;
    const product_id = params.split("/").at(-1);

    try {
      const favourite = await ADD_PRODUCT_TO_fAVOURITE(product_id as string, session?.sub);

      return NextResponse.json({ favourite, status: 200 });
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Unaothorized', status: 401 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.AUTH_SECRET });
  const params = req.nextUrl.pathname;
  const id = params.split("/").at(-1);

  if (session?.sub) {
    try {
      await DELETE_FAVOURITE_BY_PRODUCT_ID(id as string, session?.sub);

      return NextResponse.json({ message: 'Removed Product from Favourite', status: 200 });
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Unaothorized', status: 401 });
  }
}