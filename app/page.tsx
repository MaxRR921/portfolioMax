import HelloWorld from './title.mdx'
import Subtitle from './subtitle.mdx'
import Github from './github.mdx'
import HomeBody from './homeBody.mdx'
import Link from 'next/link'
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
            <div className="flex justify-start mt-4"> {/* Increased spacing */}
              <Link href="https://www.linkedin.com/in/maxwell-richter-0b8a671b9/" className="custom-underline2 pr-1">
                <span className="hover:bg-stone-700 rounded-md px-2 py-1">
                  LinkedIn
                </span>
              </Link>
              <Link href="https://github.com/MaxRR921" className="custom-underline2 pl-1">
                <span className="hover:bg-stone-700 rounded-md px-2 py-1">
                  GitHub
                </span>
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
