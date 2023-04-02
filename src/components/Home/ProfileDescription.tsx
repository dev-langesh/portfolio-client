import Link from "next/link";
import React from "react";

export default function ProfileDescription() {
  return (
    <p className="pt-3 text-slate-200">
      I'm a FullStack Developer who loves to build inovative projects. I'm in
      this field for more than 2 years. I have successfully completed 30+ orders
      from clients under diffrent nations with high ratings and I'm a{" "}
      <span className="font-bold text-blue-600">Level One Seller </span> on{" "}
      <Link
        target="_blank"
        className="font-bold font-slate text-green-600 hover:underline"
        href="https://www.fiverr.com/dev_langesh"
      >
        Fiverr
      </Link>
      .
    </p>
  );
}
