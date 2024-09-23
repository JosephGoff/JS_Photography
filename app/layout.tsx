import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Preload from "@/effects/Preload/Preload";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jess Shulman Portfolio",
  description: "Photography & Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preload>
          <Navbar />
          {children}
        </Preload>
      </body>
    </html>
  );
}
