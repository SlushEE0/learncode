import { Lexend } from "next/font/google";

import "./globals.css";
import Messager from "../components/messager/messager";
import Navbar from "@/components/navbar/navbar";

export const metadata = {
  title: "Learn To Code",
  description: "wee"
};

export const fontSans = Lexend({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontSans.className + " bg-background flex justify-center items-center"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
