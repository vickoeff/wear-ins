import rootAuth from "@/auth";

export const getCurrentUser = async () => {
  const session = await rootAuth.auth();

  return session?.user;
};

export const getCurrentRole = async () => {
  const session = await rootAuth.auth();

  return session?.user?.role;
};
