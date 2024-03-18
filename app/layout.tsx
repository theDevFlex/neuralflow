import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/components/session/session-provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeuralFlow",
  description: "A no code solution to tensorflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <NextAuthProvider> */}
      <body className={montserrat.className}>{children}</body>
      {/* </NextAuthProvider> */}
    </html>
  );
}
