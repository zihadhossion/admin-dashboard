import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { connectToDB } from "@/lib/mongodb";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Dashboard by next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  await connectToDB();
  return (
    <html lang="en">
      <>
        <body className={inter.className}>{children}</body>
      </>
    </html>
  );
}