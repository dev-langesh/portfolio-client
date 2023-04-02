import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { navData } from "./navData";

export default function HorizontalNavBar() {
  return (
    <header className="bg-blue-600 py-1 md:py-2 px-4 flex items-center justify-between shadow-black shadow-lg">
      <h1 className="text-lg font-semibold font-slab">
        <Link href="/">Portfolio</Link>
      </h1>

      <span className="md:hidden">
        <IconButton size="small" sx={{ color: "white" }}>
          <MenuIcon sx={{ fontSize: "23px" }} />
        </IconButton>
      </span>

      <nav className="hidden md:flex space-x-4">
        {navData.map((nav) => {
          return (
            <Link
              key={nav.id}
              className="text-sm hover:text-white/75 "
              href={nav.href}
            >
              {nav.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
