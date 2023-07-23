import { useAppDispatch, useAppSelector } from "@/reduxapp/hooks";
import { closeMenu, selectMenu } from "@/features/menu/MenuSlice";
import Link from "next/link";
import React from "react";
import { navData } from "./navData";
import ClearIcon from "@mui/icons-material/Clear";

export default function VerticalNavBar() {
  const menu = useAppSelector(selectMenu);

  const dispatch = useAppDispatch();

  return (
    <div
      className={`w-[300px] pt-6 h-screen shadow-full shadow-black/50 bg-gray-900 absolute z-50 top-0 bottom-0 ${
        menu ? "left-0" : "-left-full"
      } sm:hidden transition-all duration-150`}
    >
      <nav className="flex flex-col space-y-3 w-full">
        <span className="pr-4 flex items-end justify-end hover:cursor-pointer">
          <ClearIcon onClick={() => dispatch(closeMenu())} />
        </span>
        {navData.map((nav) => {
          return (
            <Link
              key={nav.id}
              href={nav.href}
              onClick={() => dispatch(closeMenu())}
              className="px-10 py-3 block hover:bg-black transition duration-100 cursor-pointer"
            >
              {nav.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
