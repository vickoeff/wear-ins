import prisma from "./prisma";

export async function GET_USER_BY_ID(id: string) {
  const user = await prisma.user.findUnique({
    where: { id: id as string },
  });

  return user;
}

export async function GET_USER_BY_EMAIL(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });

  return user;
};