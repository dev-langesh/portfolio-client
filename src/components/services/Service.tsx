import React from "react";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./serviceData";

export default function Service() {
  return (
    <div className="p-6">
      <h1 className="text-center text-xl md:text-2xl font-bold font-slab tracking-wider pb-2">
        Services
      </h1>
      <div className=" flex items-center justify-center flex-wrap">
        {serviceData.map((service) => {
          return <ServiceCard key={service.id} {...service} />;
        })}
      </div>
    </div>
  );
}
