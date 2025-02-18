"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="h-32 flex lg:justify-center justify-start bg-white dark:bg-black shadow-md">
      <div className="flex lg:w-5/12 items-center">
        <Link href="/" passHref>
          <span
            className={`mx-5 cursor-pointer hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md ${
              pathname === "/" ? "font-bold" : ""
            }`}
          >
            Home
          </span>
        </Link>
        <Link href="/projects" passHref>
          <span
            className={`cursor-pointer hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md ${
              pathname === "/projects" ? "font-bold" : ""
            }`}
          >
            Projects
          </span>
        </Link>
      </div>

      {/* Dark Mode Toggle */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-auto mr-5 p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md shadow-md"
        >
          {theme === "dark" ? <RiSunLine size={24} /> : <RiMoonFill size={24} />}
        </button>
      )}
    </div>
  );
};

export default Navbar;
