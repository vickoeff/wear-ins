import { getLoggedUser } from "@/services/auth/getLoggedUser";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<{
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: "ADMIN" | "USER";
    isOAuth?: boolean;
  } | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await getLoggedUser();

      if (user) setUser(user);
    }

    getUser();
  }, []);

  return { user }
}