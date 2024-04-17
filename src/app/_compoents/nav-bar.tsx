import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-4">
      <Link href="/">
        <p className="text-xl font-bold">Gallery</p>
      </Link>
      <div className="flex items-center">
        <a
          href="https://github.com/t3-oss/create-t3-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
