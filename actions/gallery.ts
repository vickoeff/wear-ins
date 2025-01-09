import { Gallery } from "@prisma/client";
import prisma from "./prisma";

export async function GET_GALLERY_BY_PRODUCT_ID(product_id: string, page?: number, pageSize?: number) {
  const total = await prisma.gallery.count({
    where: { productId: product_id }
  });

  if (page && pageSize) {
    const skip = (page - 1) * pageSize;
    const gallery = await prisma.gallery.findMany({
      where: { productId: product_id },
      skip: skip,
      take: pageSize,
    });

    return { gallery, total };
  }

  const gallery = await prisma.gallery.findMany({
    where: { productId: product_id },
  });

  return { gallery, total };
}

export async function GET_PHOTO_BY_ID(id: string) {
  const photo = await prisma.gallery.findUnique({
    where: { id: id }
  })

  return photo;
}

export async function ADD_PHOTO(product_id: string, payload: Gallery) {

  await prisma.gallery.create({
    data: {
      ...payload,
      productId: product_id
    },
  });

  return { ...payload, productId: product_id };
}

export async function UPDATE_PHOTO_BY_ID(photo_id: string, payload: Partial<Gallery>) {
  const updatedPhoto = await prisma.gallery.update({
    where: { id: photo_id },
    data: payload,
  });

  return updatedPhoto;
}

export async function DELETE_PHOTO_BY_ID(photo_id: string) {
  const deletedPhoto = await prisma.gallery.delete({
    where: { id: photo_id },
  });

  return deletedPhoto;
}