"use server";

import * as z from "zod";
import { signIn } from "@/auth";
import AuthError from "next-auth";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schema";
import { GET_USER_BY_EMAIL } from "./user";
import { sendVerificationEmail } from "@/libs/mail";
import {
  generateVerificationToken
} from "@/libs/token";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await GET_USER_BY_EMAIL(email);

  if (!existingUser || !existingUser.email) {
    return { error: "Email does not exist!" };
  }

  const isValidPassword = await bcrypt.compare(password, existingUser?.password ?? "");

  if (!isValidPassword) {
    return { error: "Wrong Password!" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { error: "Verify your email!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    return { success: "Logged in successfully!" };
  } catch (error) {
    if (error instanceof AuthError) {
      const authError = error as typeof AuthError;

      switch (authError) {
        // @ts-expect-error "fix later"
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: `Something went wrong!: ${authError}` };
      }
    }

    throw error;
  }
};