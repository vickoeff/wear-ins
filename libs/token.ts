import prisma from "@/actions/prisma";
import { getVerificationTokenByEmail, getPasswordResetTokenByEmail } from "@/actions/auth";

export const generatePasswordResetToken = async (email: string) => {
  const token = [0, 0, 0, 0].map(() => Math.floor(Math.random() * 10)).join("");
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await prisma.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }

  const passwordResetToken = await prisma.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordResetToken;
};

export const generateVerificationToken = async (email: string) => {
  const token = [0, 0, 0, 0].map(() => Math.floor(Math.random() * 10)).join("");
  const expires = new Date(new Date().getTime() + (3600 * 1000) * 6); // set Expired Token 6 hour

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};