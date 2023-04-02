import React from "react";

export default function BannerDecorations() {
  return (
    <>
      <div className="w-80 h-72 shadow-full shadow-black hidden md:block absolute -bottom-52 -left-20 transform rotate-45  "></div>
      <div className="w-80 h-72 shadow-full shadow-black hidden md:block absolute -bottom-52 -left-20 transform rotate-45 scale-50  "></div>

      <div className=" w-20 h-20 absolute -bottom-10 hidden md:block shadow-full shadow-black transform rotate-45 "></div>
      <div className="h-48 w-4 bg-blue-600 rounded-full absolute bottom-6 hidden md:block -right-3"></div>
      <div className="h-48 w-4 bg-blue-600 rounded-full absolute bottom-6 md:hidden -left-3"></div>
    </>
  );
}
