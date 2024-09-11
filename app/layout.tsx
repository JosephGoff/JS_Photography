import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import LoadTransition from '@/components/Transitions/LoadTransition'; // Import the PageTransition component

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
        <LoadTransition>
        <Navbar />
        {children}
        </LoadTransition>
      </body>
    </html>
  );
}
