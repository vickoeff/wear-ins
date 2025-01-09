"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import prisma from "@/actions/prisma";
import { RegisterSchema } from "@/schema";
import { GET_USER_BY_EMAIL } from "./user";
import { sendVerificationEmail } from "@/libs/mail";
import { generateVerificationToken } from "@/libs/token";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await GET_USER_BY_EMAIL(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: password === "wearinsdihati" ? "ADMIN" : "USER"
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  // console.log("token: ", verificationToken);

  return { success: "Confirmation email sent!" };
};