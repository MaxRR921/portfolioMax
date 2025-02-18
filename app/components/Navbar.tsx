"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const pathname = usePathname();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering dark mode
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine current theme (dark or light)
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Prevent hydration errors by returning null until mounted
  if (!mounted) return null;

  return (
    <div className={`h-32 flex lg:justify-center justify-start bg-stone-200 dark:bg-black`}>
      <div className="flex lg:w-5/12 items-center">
        <Link href="/" passHref>
          <span
            className={`mx-5 hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md text-black dark:text-gray-400 custom-underline ${
              pathname === "/" ? "font-bold" : ""
            }`}
          >
            Home
          </span>
        </Link>
        <Link href="/projects" passHref>
          <span
            className={`hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md text-black dark:text-gray-400 custom-underline ${
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

