// "use client";
// import { useTheme } from 'next-themes'
// import React, {useState} from "react"
// //import { Link } from "react-scroll/modules"
// import  Link  from 'next/link'
// import { RiMoonFill, RiSunLine } from "react-icons/ri"
// import { IoMdMenu, IoMdClose } from "react-icons/io"


// export const Navbar = () => {
//   return (
//     <div className='h-32 flex lg:justify-center justify-start bg-black'>
//       <div className='flex lg:w-5/12 items-center'>
//           <Link href = "/" className='mx-5 hover:bg-stone-700 rounded-md text-white custom-underline'> Home </Link>
//           <Link href = "/projects" className='hover:bg-stone-700 rounded-md text-white custom-underline'> Projects </Link>
//       </div>
//     </div>
//   )
// }
// export default Navbar




"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-32 flex items-center bg-black">
      <Link href="/" className="mx-5 hover:bg-stone-700 rounded-md text-white">
        Home
      </Link>
      <Link
        href="/projects"
        className="hover:bg-stone-700 rounded-md text-white"
      >
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
