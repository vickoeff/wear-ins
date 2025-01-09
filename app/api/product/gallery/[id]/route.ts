import { ADD_PHOTO, GET_GALLERY_BY_PRODUCT_ID } from "@/actions/gallery";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    const params = req.nextUrl.pathname;
    const product_id = params.split("/").at(-1);

    try {
      const { gallery, total } = await GET_GALLERY_BY_PRODUCT_ID(product_id as string);

      if (total > 0) {
        return NextResponse.json({ gallery, total, status: 200 });
      } else {
        return NextResponse.json({ message: 'No Gallery', status: 404 });
      }
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed', status: 405 });
  }
}

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const params = req.nextUrl.pathname;
    const product_id = params.split("/").at(-1);
    const payload = await req.json();

    try {
      const photo = await ADD_PHOTO(product_id as string, payload);

      return NextResponse.json({ photo, status: 200 });
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed', status: 405 });
  }
}