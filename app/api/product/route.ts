import { CREATE_PRODUCT, GET_PRODUCTS } from "@/actions/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  if (req.method === 'GET') {
    const page = +(req.nextUrl.searchParams.get('page') ?? 0);
    const pageSize = +(req.nextUrl.searchParams.get('pagesize') ?? 0);

    try {
      const { products, total } = await GET_PRODUCTS(page, pageSize);

      if (products.length > 0) {
        return NextResponse.json({ products, total, status: 200 });
      } else {
        return NextResponse.json({ message: 'No Products', status: 404 });
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
    try {
      const payload = await req.json();
      const product = await CREATE_PRODUCT(payload);
      console.log("produk", product);

      return NextResponse.json({ product, status: 201 });
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed', status: 405 });
  }
}