import { DELETE_FAVOURITE } from "@/actions/favourite";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const params = req.nextUrl.pathname;
  const id = params.split("/").at(-1);
  try {
    await DELETE_FAVOURITE(id as string);

    return NextResponse.json({ message: 'Removed Product from Favourite', status: 200 });
  } catch (error: { message: string } | string | unknown) {
    return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
  }
}