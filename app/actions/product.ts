import { Product } from "@prisma/client";
import prisma from "./prisma";

export async function GET_PRODUCT_BY_ID(id: string) {
  const product = await prisma.product.findUnique({
    where: { id: id as string },
  });

  return product;
}

export async function CREATE_PRODUCTS(new_product: Product) {
  const product = await prisma.product.create({
    data: {
      ...new_product
    },
  });

  return product;
}