import HelloWorld from './title.mdx'
import Subtitle from './subtitle.mdx'
import HomeBody from './homeBody.mdx'
import Link from 'next/link'
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import TechnicalSkills from './technicalSkills.mdx'

export default function Page() {
  return (
    <div className="h-screen flex lg:justify-center justify-start">
      <div className="flex lg:w-5/12 items-start h-12">
        <div className="mx-5">
          
          {/* ✅ First Gray Background Section */}
          <div className="bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md">
            
            {/* Name */}
            <h1 className="collidable text-4xl">
              Maxwell Richter
            </h1>

            {/* Subtitle */}
            <div className="font-bold flex justify-start mt-2"> {/* Added mt-2 for spacing */}
              <div>Computer Science @ Chapman</div>
            </div>
            {/* Social Links */}
            <div className="flex justify-start mt-4 gap-2">
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/maxwell-richter-0b8a671b9/"
                className="group inline-flex items-center gap-2 text-inherit
                          transition-transform duration-300 hover:scale-[1.06]
                          hover:text-stone-900 dark:hover:text-gray-100
                          px-2 py-1 rounded-md hover:bg-stone-700/40"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium">LinkedIn</span>

                {/* Animated arrow */}
                <ArrowUpRight
                  className="h-4 w-4 opacity-0 -translate-y-0.5 -translate-x-1
                            transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0"
                  aria-hidden="true"
                />
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/MaxRR921"
                className="group inline-flex items-center gap-2 text-inherit
                          transition-transform duration-300 hover:scale-[1.06]
                          hover:text-stone-900 dark:hover:text-gray-100
                          px-2 py-1 rounded-md hover:bg-stone-700/40"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium">GitHub</span>

                {/* Animated arrow */}
                <ArrowUpRight
                  className="h-4 w-4 opacity-0 -translate-y-0.5 -translate-x-1
                            transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Second Gray Background Section (Spaced Below) */}
          <div className="bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md mt-6">
            <HomeBody />
          </div>

          <div className="bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md mt-6">
            <TechnicalSkills />
          </div>
          
        </div>
      </div>
    </div>
  )
}
