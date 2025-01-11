import prisma from "./prisma";

export async function GET_FAVOURITE_BY_USER_ID(userId: string) {
  const total = await prisma.favorite.count({
    where: { userId }
  });
  const favourites = await prisma.favorite.findMany({ where: { userId }, include: { product: true } });

  return { favourites, total };
}

export async function ADD_PRODUCT_TO_fAVOURITE(productId: string, userId: string) {
  const isExist = await prisma.favorite.findFirst({ where: { productId, userId } });
  if (isExist) return { error: "Product is already added to favourite!" };

  const fav = await prisma.favorite.create({
    data: {
      productId,
      userId
    }
  })

  return fav;
}

export async function DELETE_FAVOURITE_BY_PRODUCT_ID(productId: string, userId: string) {
  const fav = await prisma.favorite.findFirst({ where: { productId, userId } });
  await prisma.favorite.delete({ where: { id: fav?.id } });

  return productId;
}

export async function DELETE_FAVOURITE(id: string) {
  await prisma.favorite.delete({ where: { id } });

  return id;
}