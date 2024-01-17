import Messager from "@/lib/messager/messager";
import Navbar from "@/lib/navbar/navbar";
import { Lexend } from "next/font/google";

const inter = Lexend({
  weight: "400",
  subsets: ["latin"]
});

export default function Home() {
  return (
    <main className={inter.className + " flex"}>
      <Navbar />
    </main>
  );
}
