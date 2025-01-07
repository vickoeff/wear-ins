import prisma from "@/actions/prisma";
import { auth } from "@/auth";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
    });
    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findFirst({
      where: { email },
    });
    return verificationToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findUnique({
      where: { token },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findFirst({
      where: { email },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};

export async function GET_ACCOUNT_BY_ID(id: string) {
  const acccount = await prisma.account.findUnique({
    where: { id: id as string },
  });

  return acccount;
}


export const getCurrentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const getCurrentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
