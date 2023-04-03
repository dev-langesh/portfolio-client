import React from "react";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./serviceData";

export default function Service() {
  return (
    <div className="p-6 flex items-center justify-center flex-wrap">
      {serviceData.map((service) => {
        return <ServiceCard key={service.id} {...service} />;
      })}
    </div>
  );
}
