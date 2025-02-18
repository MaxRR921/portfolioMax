"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="h-32 flex lg:justify-center justify-start bg-stone-200 dark:bg-black">
      <div className="flex lg:w-5/12 items-center">
        <Link href="/" passHref>
          <span
            className={`mx-5 hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md text-black dark:text-grey-400 custom-underline ${
              pathname === "/" ? "font-bold" : ""
            }`}
          >
            Home
          </span>
        </Link>
        <Link href="/projects" passHref>
          <span
            className={`hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md text-black dark:text-grey-400 custom-underline ${
              pathname === "/projects" ? "font-bold" : ""
            }`}
          >
            Projects
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
