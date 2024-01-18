import Link from "next/link";

import { Button } from "@mui/joy";
import CustomMuiStyles from "@/lib/MuiStyles";

export default function NotFound() {
  return (
    <section className="absolute top-[50%] right-[50%] translate-x-1/2 translate-y-[-50%]">
      <h1>404 PAGE NOT FOUND</h1>
      <hr />
      <p>Could not find requested resource</p>
      <br />
      <CustomMuiStyles>
        <Link href="/">
          <Button size="lg" variant="solid" style={{ transition: "all 200ms" }}>
            <h1 className="text-2xl">Back to Homepage</h1>
          </Button>
        </Link>
      </CustomMuiStyles>
    </section>
  );
}
