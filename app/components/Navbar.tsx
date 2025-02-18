"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="h-32 flex lg:justify-center justify-start bg-stone-200 dark:bg-black">
      <div className="flex lg:w-5/12 items-center relative">
        {/** Home Link **/}
        <Link href="/" passHref>
          <span
            className={`mx-5 relative hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md text-black dark:text-gray-400 custom-underline`}
          >
            Home
            {pathname === "/" && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 h-1 bg-blue-500 bottom-[-2px] rounded-md"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </span>
        </Link>

        {/** Projects Link **/}
        <Link href="/projects" passHref>
          <span
            className={`hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md text-black dark:text-gray-400 custom-underline relative`}
          >
            Projects
            {pathname === "/projects" && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 h-1 bg-blue-500 bottom-[-2px] rounded-md"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
