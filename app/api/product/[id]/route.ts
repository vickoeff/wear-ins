import { DELETE_PRODUCT, GET_PRODUCT_BY_ID, UPDATE_PRODUCT } from '@/actions/product';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.pathname;
  const id = params.split("/").at(-1);

  if (req.method === 'GET') {
    try {
      const product = await GET_PRODUCT_BY_ID(id as string);

      if (product) {
        return NextResponse.json({ product, status: 200 });
      } else {
        return NextResponse.json({ message: 'Product not found', status: 404 });
      }
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed', status: 405 });
  }
}

export async function PUT(req: NextRequest) {
  const params = req.nextUrl.pathname;
  const id = params.split("/").at(-1);

  if (req.method === 'PUT') {
    try {
      const payload = await req.json();
      const product = await UPDATE_PRODUCT(id as string, payload);

      return NextResponse.json({ product, status: 200 });
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed', status: 405 });
  }
}

export async function DELETE(req: NextRequest) {
  const params = req.nextUrl.pathname;
  const id = params.split("/").at(-1);

  if (req.method === 'DELETE') {
    try {
      await DELETE_PRODUCT(id as string);

      return NextResponse.json({ message: 'Product deleted', status: 200 });
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed', status: 405 });
  }
}