import { CREATE_PRODUCTS } from "@/app/actions/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const payload = await req.json();
      const product = await CREATE_PRODUCTS(payload);

      NextResponse.json({ product, status: 201 });
    } catch (error: { message: string } | string | unknown) {
      NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    NextResponse.json({ message: 'Method not allowed', status: 405 });
  }
}