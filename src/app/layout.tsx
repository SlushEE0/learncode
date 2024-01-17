import { Inter, Lexend } from "next/font/google";

import "./globals.css";
import Messager from "../lib/messager/messager";
import Navbar from "@/lib/navbar/navbar";

export const metadata = {
  title: "Learn To Code",
  description: ""
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-background"}>{children}</body>
    </html>
  );
}
