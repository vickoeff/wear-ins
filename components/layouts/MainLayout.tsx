'use client'

import { ContextWrapper } from "@/context/ContextWrapper";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const AUTH_PATH: { [key: string]: boolean } = { "/auth/login": true, "/auth/register": true };

export const MainLayout = ({ children, }: { children: React.ReactNode }) => {
  const path = usePathname();

  return (
    <ContextWrapper >
      <Navbar />
      {children}
      {
        !AUTH_PATH[path] && <Footer />
      }
    </ContextWrapper>
  )
}