import { Inter, Lexend } from "next/font/google";

import "./globals.css";
import Messager from "../lib/messager/messager";
import Navbar from "@/lib/navbar/navbar";

export const metadata = {
  title: "Learn To Code",
  description: "wee"
};

const inter = Lexend({
  weight: "400",
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-background flex"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
