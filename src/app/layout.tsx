import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const vietnam = Be_Vietnam_Pro({ 
    weight: '500',
    subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BomBView",
  description: "Site de review de filmes, series e jogos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={vietnam.className}>{children}</body>
    </html>
  );
}
