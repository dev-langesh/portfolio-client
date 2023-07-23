import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { navData } from "./navData";
import { useAppDispatch } from "@/reduxapp/hooks";
import { openMenu } from "@/features/menu/MenuSlice";

export default function HorizontalNavBar() {
  const dispatch = useAppDispatch();

  return (
    <header className="bg-blue-600 h-14 px-4 flex items-center justify-between shadow-black shadow-lg sticky z-50 top-0">
      <h1 className="text-lg font-semibold font-slab">
        <Link className="" href="/">
          Langesh <span className="pl-4">Portfolio</span>
        </Link>
        <span className="bg-blue-900 shadow-lsm animate-width-in w-0 h-14 absolute top-0 left-0 -z-10  transform -skew-x-30 -translate-x-8 block "></span>
      </h1>

      <span className="sm:hidden">
        <IconButton
          onClick={() => dispatch(openMenu())}
          size="small"
          sx={{ color: "white" }}
        >
          <MenuIcon sx={{ fontSize: "23px" }} />
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
