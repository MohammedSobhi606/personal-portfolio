import type { Metadata } from "next";
import { Cairo, Outfit } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
});

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Sobhi |👋 ",
  description: "made by Mohammed Sobhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}  antialiased`}>{children}</body>
    </html>
  );
}
