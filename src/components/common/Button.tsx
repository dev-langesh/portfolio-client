import Link from "next/link";
import React from "react";

export default function Button({
  children,
  className,
}: {
  children: String;
  className?: string;
}) {
  return (
    <Link
      href="/contact"
      className={` text-sm px-3 py-2 border bg-blue-600 border-blue-600 hover:bg-transparent hover:text-blue-600 ${className}`}
    >
      {children}
    </Link>
  );
}
