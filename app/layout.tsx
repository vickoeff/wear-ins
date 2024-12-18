import type { Metadata } from "next";
import { Poppins, Staatliches, Gajraj_One } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Footer, Navbar } from "@/components/layouts";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin", "latin-ext"]
});

const staatliches = Staatliches({
  variable: "--font-staatliches",
  weight: "400",
  subsets: ["latin", "latin-ext"]
});

const gajraj = Gajraj_One({
  variable: "--font-gajraj-one",
  weight: "400",
  subsets: ["latin", "latin-ext"]
});

export const metadata: Metadata = {
  title: "Wear.Ins",
  description: "Wearing clothes with awesome inspiration. Clothing brand store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${staatliches.variable} ${gajraj.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
