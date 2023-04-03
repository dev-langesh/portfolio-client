import Image from "next/image";
import React from "react";
import { serviceDataType } from "./serviceData";

export default function ServiceCard({
  image,
  title,
  description,
}: serviceDataType) {
  return (
    <div className="m-4 h-72 bg-gray-900 flex flex-col items-center justify-center shadow-xl shadow-black w-64 transition-all duration-150">
      <Image src={image} width={250} height={300} alt={title} />

      <div className="p-4 space-y-2 w-full">
        <h1 className="text-blue-600 font-slab font-bold">{title}</h1>

        <p className="text-slate-500 text-sm">{description}</p>
      </div>
    </div>
  );
}
