import type { Metadata } from "next";
import { Arizonia, Inter } from "next/font/google";
import "./globals.css";

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: "400", // Arizonia só tem o peso 400
  variable: "--font-arizonia", // Variável CSS opcional
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mbras",
  description: "Conheça o Itacema 366",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${arizonia.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
