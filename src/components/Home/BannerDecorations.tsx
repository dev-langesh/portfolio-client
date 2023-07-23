import React from "react";

export default function BannerDecorations() {
  return (
    <>
      <div className="w-80 animate-hill-up h-72 shadow-full shadow-black hidden md:block absolute -bottom-[1000px]  -left-20 transform rotate-45  "></div>
      <div className="w-80 animate-hill-up-sm h-72 shadow-full shadow-black hidden md:block absolute -bottom-[1000px] -left-20 transform rotate-45 scale-50  "></div>

      <div className="w-80 animate-hill-up-xs h-72 shadow-full shadow-black hidden md:block absolute -bottom-[1000px]  transform rotate-45 scale-50  "></div>

      <div className="h-0 w-4 bg-blue-600 animate-height-up absolute top-0 hidden md:block -right-3"></div>
      <div className="h-48 w-4 bg-blue-600 rounded-full absolute bottom-20 md:hidden -left-3"></div>
    </>
  );
}
