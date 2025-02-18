"use client"

import React, { useState } from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className='h-32 flex lg:justify-center justify-start bg-black'>
      <div className='flex lg:w-5/12 items-center'>
        <Link 
          href="/" 
          className="mx-5 hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md text-black dark:text-white custom-underline"
          prefetch
        >
          Home
        </Link>
        <Link 
          href="/projects"
          className="hover:bg-stone-300 dark:hover:bg-stone-700 rounded-md text-black dark:text-white custom-underline"
          prefetch
        >
          Projects
        </Link>
      </div>
    </div>
  )
}

export default Navbar