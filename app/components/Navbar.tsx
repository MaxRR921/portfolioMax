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
          
          {/* Home Link with Background Highlight */}
          <div className="relative flex flex-col items-center">
            <Link href="/" passHref>
              <motion.div
                className="relative px-4 py-1 rounded-md text-black dark:text-gray-400 bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 transition-all duration-200 hover:bg-gray-400 hover:bg-opacity-30 dark:hover:bg-gray-600 cursor-pointer"
              >
                Home
              </motion.div>
            </Link>
          </div>

          {/* Projects Link with Background Highlight */}
          <div className="relative flex flex-col items-center">
            <Link href="/projects" passHref>
              <motion.div
                className="relative px-5 py-1 rounded-md text-black dark:text-gray-400 bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 transition-all duration-200 hover:bg-gray-400 hover:bg-opacity-30 dark:hover:bg-gray-600 cursor-pointer"
              >
                Projects
              </motion.div>
            </Link>
          </div>

          {/* Underline Animation */}
          <motion.div
            layoutId="underline"
            className={`absolute bottom-0 h-[2px] ${underlineColor} rounded-md`}
            initial={{ left: "0px", width: "40px" }} // Starts at "Home"
            animate={{
              left: pathname.startsWith("/projects") ? "90px" : "-25px", // Keeps underline at Projects for all /projects/*
              width: pathname.startsWith("/projects") ? "55px" : "40px", // Adjust width dynamically
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
