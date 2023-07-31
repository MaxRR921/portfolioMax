import { useTheme } from 'next-themes'
import React, {useState} from "react"
//import { Link } from "react-scroll/modules"
import  Link  from 'next/link'
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"


export const Navbar = () => {
  return (
    <header>
         <div className='flex flex-row '>
          <Link href = "/" className='mx-10 mx-auto'> Home </Link>
          <Link href = "/projects"> Projects </Link>
         </div>
         {/* 
         <div className='absolute top-0 right-0 h-16 w-9'>
            {curentTheme === "dark" ? (
              <button 
              onClick={()=>setTheme("light")}
              className='bg-slate-100 p-2 rounded-xl'>
                <RiSunLine color = 'black'/>
              </button>
            ) : (
              <button 
              onClick={()=>setTheme("dark")}
              className='bg-slate-100 p-2 rounded-xl'>
                <RiMoonFill/>
              </button>
          )}
        </div>
            */}
    </header>
  )
}
export default Navbar