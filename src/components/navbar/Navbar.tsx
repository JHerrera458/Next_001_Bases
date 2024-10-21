import React from "react";
import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";

import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="flex px-4 py-2 m-2 bg-blue-800 rounded gap-x-2">
      <Link
        href={"/"}
        className="flex items-center text-base font-bold text-white gap-x-2"
      >
        <HomeIcon />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>
      {navItems.map((navItem) => (
        <ActiveLink {...navItem} key={navItem.path} />
      ))}
    </nav>
  );
};

export default Navbar;
