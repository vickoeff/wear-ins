import type { Metadata } from "next";
import { Poppins, Staatliches, Gajraj_One } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layouts";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600"]
});

const staatliches = Staatliches({
  variable: "--font-staatliches",
  weight: "400"
});

const gajraj = Gajraj_One({
  variable: "--font-gajraj-one",
  weight: "400",
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
      </body>
    </html>
  );
}
