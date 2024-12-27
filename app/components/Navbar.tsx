import { useTheme } from 'next-themes'
import React, {useState} from "react"
import  Link  from 'next/link'
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

const Navbar = () => {
  return (
    <div className='h-32 flex lg:justify-center justify-start bg-black'>
      <div className='flex lg:w-5/12 items-center'>
        <Link href="/">
          <a className="mx-5 hover:bg-stone-700 rounded-md text-white custom-underline">Home</a>
        </Link>
        <Link href="/projects">
          <a className="mx-5 hover:bg-stone-700 rounded-md text-white custom-underline">Projects</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;