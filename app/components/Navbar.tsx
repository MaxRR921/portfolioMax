import { useTheme } from 'next-themes'
import React, {useState} from "react"
import { Link } from "react-scroll/modules"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label:"Home",
    page:"home",
  },
  {
    label:"About",
    page:"about",
  },
  {
    label:"Projects",
    page:"projects",
  },
]


export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const curentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false) 
  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between'>
            <div className='md:py-5 md:block'>
              <h2 className='font-bold'> Maxwell Richter </h2>
              <div className='md:hidden'>
                <button>
                  {navbar ? <IoMdClose/> : <IoMdMenu/>}
                </button>
              </div>
            </div>
          </div>   
      </div>
        <div className='md:space-x-10'>
          {NAV_ITEMS.map((item, idx) => {
            return <a key={idx}>{item.label}</a>
          })}
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
      </div>
    </header>
  )
}
export default Navbar