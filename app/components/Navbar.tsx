"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

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
  const underlineColor = currentTheme === "dark" ? "bg-gray-400" : "bg-black";

  // Prevent hydration errors by returning null until mounted
  if (!mounted) return null;

  return (
    <div className="h-32 flex lg:justify-center justify-start bg-stone-200 dark:bg-black relative">
      <div className="flex lg:w-5/12 items-center relative">
        {/* Navigation Links */}
        <div className="relative flex space-x-10">
          {/* Home Link */}
          <Link href="/" passHref>
            <span
              className={`relative px-2 pb-1 hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md text-black dark:text-gray-400 `}
            >
              Home
            </span>
          </Link>

          {/* Projects Link */}
          <Link href="/projects" passHref>
            <span
              className={`relative px-2 pb-1 hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md text-black dark:text-gray-400 `}
            >
              Projects
            </span>
          </Link>

          {/* Underline Animation */}
          <motion.div
            layoutId="underline"
            className={`absolute bottom-0 h-[2px] ${underlineColor} rounded-md`}
            initial={{ left: "0px", width: "40px" }} // Starts at left of "Home"
            animate={{
              left: pathname === "/projects" ? "68px" : "-30px", // Adjusts movement distance
              width: pathname === "/projects" ? "55px" : "40px", // Adjust width dynamically
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

        </div>
      </div>
    </div>
  );
};

export default Navbar;
