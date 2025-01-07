import { getCurrentUser } from "@/actions/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      const user = await getCurrentUser();

      if (user) {
        return NextResponse.json({ user, status: 200 });
      } else {
        return NextResponse.json({ message: 'Unauthorized', status: 401 });
      }
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed', status: 405 });
  }
}