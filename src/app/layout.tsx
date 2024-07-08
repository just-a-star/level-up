import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Level Up",
  description: "Level Up your skills with our study assistance",
  // icons: {
  //   icon: "/images/icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
