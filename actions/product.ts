import { Product } from "@prisma/client";
import prisma from "./prisma";



export async function GET_PRODUCTS(page?: number, pageSize?: number) {
  const total = await prisma.product.count();

  if (page && pageSize) {
    const skip = (page - 1) * pageSize;
    const products = await prisma.product.findMany({
      skip: skip,
      take: pageSize,
    });
    return { products, total };
  }

  const products = await prisma.product.findMany();

  return { products, total };
}

export async function GET_PRODUCT_BY_ID(id: string) {
  const product = await prisma.product.findUnique({
    where: { id: id as string },
  });

  return product;
}

export async function CREATE_PRODUCT(new_product: Product) {
  await prisma.product.create({
    data: {
      ...new_product
    },
  });

  return new_product;
}

export async function UPDATE_PRODUCT(id: string, updated_product: Product) {
  await prisma.product.update({
    where: { id: id as string },
    data: {
      ...updated_product
    },
  });

  return updated_product;
}

export async function DELETE_PRODUCT(id: string) {
  await prisma.product.delete({
    where: { id: id as string },
  });

  return id;
}