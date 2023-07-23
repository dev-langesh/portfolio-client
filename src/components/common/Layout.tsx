import React from "react";
import HorizontalNavBar from "./navbar/HorizontalNavBar";
import VerticalNavBar from "./navbar/VerticalNavBar";

export default function Layout({
  children,
}: {
  children: React.ReactElement[];
}) {
  return (
    <div className=" bg-gray-900 w-screen h-screen overflow-x-hidden overflow-y-auto text-white font-roboto">
      <HorizontalNavBar />
      <VerticalNavBar />
      {children}
    </div>
  );
}
