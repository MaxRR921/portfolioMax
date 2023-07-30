import { useTheme } from 'next-themes'
import React, {useState} from "react"

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
    <header className="w-full mx-auto px-4">
      <div>
        <div>
          <div className='font-bold'>
            <h2> Maxwell Richter </h2>

          </div>
        </div>
        <div>
          {NAV_ITEMS.map((item, idx) => {
            return <a key={idx}>{item.label}</a>
          })}
        </div>
      </div>
    </header>
  )
}
export default Navbar