import { ReactNode } from "react";

import "./navbar.css";

export default function Navbar({}) {
  return (
    <section className="fixed flex top-0 left-0 m-0 w-screen h-14 bg-foreground rounded-b-xl gap-[1rem] items-center justify-start pl-4 pr-4">
      <NavbarItem>
        <p>A</p>
      </NavbarItem>
      <NavbarItem>
        <p>B</p>
      </NavbarItem>
      <NavbarItem>
        <p>C</p>
      </NavbarItem>
      <NavbarItem>
        <p>D</p>
      </NavbarItem>
      <NavbarItem>
        <p>E</p>
      </NavbarItem>
    </section>
  );
}

function NavbarItem({ children }: { children: ReactNode | String }) {
  return <div className="navbar-item">{children}</div>;
}
