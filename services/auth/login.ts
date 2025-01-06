"use server";

import * as z from "zod";
import auth from "@/auth";
import AuthError from "next-auth";
import { LoginSchema } from "@/schema";
import { revalidatePath } from "next/cache";
import { GET_USER_BY_EMAIL } from "../../actions/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/constant/routes";
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

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist!" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Verify your email!" };
  }

  try {
    // Sign in the user with credentials
    await auth.signIn("credentials", {
      email,
      password,
      redirectTo:
        existingUser.role === "ADMIN"
          ? "/dashboard/admin"
          : DEFAULT_LOGIN_REDIRECT,
    });

    revalidatePath("/");
    revalidatePath("/dashboard");
    revalidatePath(DEFAULT_LOGIN_REDIRECT);

    return { success: "Logged in successfully!" };
  } catch (error) {
    if (error instanceof AuthError) {
      const authError = error as typeof AuthError;
      switch (authError) {
        // @ts-expect-error "fix later"
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};