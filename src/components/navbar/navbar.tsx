import { ReactNode } from "react";
import Link from "next/link";

import "./navbar.css";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import { SvgIcon } from "@mui/material";

export default function Navbar({}) {
  return (
    <section className="navbar">
      <NavbarItem name="Home">
        <Link href={"/"}>
          <SvgIcon component={WaterDropRoundedIcon}></SvgIcon>
        </Link>
      </NavbarItem>
      <div className="container_navbar-items">
        <NavbarItem name="Courses">
          <Link href={"/courses"}>
            <SvgIcon component={MenuBookRoundedIcon}></SvgIcon>
          </Link>
        </NavbarItem>
        <NavbarItem name="C">
          <p>C</p>
        </NavbarItem>
        <NavbarItem name="D">
          <p>D</p>
        </NavbarItem>
        <NavbarItem name="E">
          <p>E</p>
        </NavbarItem>
      </div>
    </section>
  );
}

function NavbarItem({
  children,
  name
}: {
  children: ReactNode | String;
  name: string;
}) {
  return (
    <section className={"navbar-item group"}>
      {children}
      <NavbarTooltip {...{ name }} />
    </section>
  );
}

function NavbarTooltip({ name }: { name: string }) {
  return <span className={"navbar-tooltip group-hover:scale-100"}>{name}</span>;
}
