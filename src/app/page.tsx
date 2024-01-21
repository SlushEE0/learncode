import Messager from "@/components/messager/messager";
import Navbar from "@/components/navbar/navbar";
import { Lexend } from "next/font/google";

const inter = Lexend({
  weight: "400",
  subsets: ["latin"]
});

export default function Home() {
  return <main className={inter.className + " flex"}></main>;
}
