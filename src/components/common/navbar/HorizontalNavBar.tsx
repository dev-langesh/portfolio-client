import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { navData } from "./navData";
import { useAppDispatch } from "@/app/hooks";
import { openMenu } from "@/features/menu/MenuSlice";

export default function HorizontalNavBar() {
  const dispatch = useAppDispatch();

  return (
    <header className="bg-blue-600 py-2 px-4 flex items-center justify-between shadow-black shadow-lg sticky top-0">
      <h1 className="text-lg font-semibold font-slab">
        <Link href="/">Portfolio</Link>
      </h1>

      <span className="sm:hidden">
        <IconButton size="small" sx={{ color: "white" }}>
          <MenuIcon
            onClick={() => dispatch(openMenu())}
            sx={{ fontSize: "23px" }}
          />
        </IconButton>
      </span>

      <nav className="hidden sm:flex space-x-4">
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
