import { useTheme } from 'next-themes'
import React, {useState} from "react"
//import { Link } from "react-scroll/modules"
import  Link  from 'next/link'
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"


export const Navbar = () => {
  return (
    <div className='h-32 flex md:justify-center justify-start bg-stone-200'>
      <div className='flex md:w-5/12 items-center'>
          <Link href = "/" className='mx-5'> Home </Link>
          <Link href = "/projects"> Projects </Link>
      </div>
    </div>
  )
}
export default Navbar