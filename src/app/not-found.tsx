import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="absolute top-[50%] right-[50%] translate-x-1/2 translate-y-[-50%]">
      <h1>404 PAGE NOT FOUND</h1>
      <hr />
      <p>Could not find requested resource</p>
      <br />
      <Link href="/">
        <Button variant="default" size="lg">
          Return Home
        </Button>
      </Link>
    </section>
  );
}
