import { UPDATE_PHOTO_BY_ID, DELETE_PHOTO_BY_ID, GET_PHOTO_BY_ID } from '@/actions/gallery';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.pathname;
  const id = params.split("/").at(-1);

  if (req.method === 'GET') {
    try {
      const product = await GET_PHOTO_BY_ID(id as string);

      if (product) {
        return NextResponse.json({ product, status: 200 });
      } else {
        return NextResponse.json({ message: 'Photo not found', status: 404 });
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
      const photo = await UPDATE_PHOTO_BY_ID(id as string, payload);

      return NextResponse.json({ photo, status: 200 });
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
      await DELETE_PHOTO_BY_ID(id as string);

      return NextResponse.json({ message: 'Photo deleted', status: 200 });
    } catch (error: { message: string } | string | unknown) {
      return NextResponse.json({ message: `Internal server error: ${error}`, status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed', status: 405 });
  }
}