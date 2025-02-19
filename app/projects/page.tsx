'use client'
import Title from './Title.mdx'
import Body from './Body.mdx'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='h-screen flex lg:justify-center justify-start'>
      <div className='flex lg:w-5/12 items-start h-12'>
        <div className='mx-5'>

          {/* ✅ Header */}
          <h1 className="bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md mt-6">
            Projects
          </h1>

          {/* ✅ Project List with Clickable Backgrounds & Hover Effect */}
          <div className="space-y-4 mt-6"> 

            {/* Fiber Optic Stress Sensor */}
            <Link href='/projects/stressSensor' passHref>
              <div className="cursor-pointer bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md transition-all duration-200 hover:bg-gray-400 hover:bg-opacity-30 dark:hover:bg-gray-600 mt-6">
                <span className='font-bold underline'>Fiber Optic Stress Sensor</span><br />
                Stress sensor to evaluate material characteristics of different tissues
              </div>
            </Link>

            {/* Roped Together */}
            <Link href='/projects/RopedTogether' passHref>
              <div className="cursor-pointer bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md transition-all duration-200 hover:bg-gray-400 hover:bg-opacity-30 dark:hover:bg-gray-600 mt-6">
                <span className='font-bold underline'>Roped Together</span><br />
                3D mountain climbing game. Winner at Oregon Game Project Challenge 2022
              </div>
            </Link>

            {/* 3D Rope Simulation */}
            <Link href='/projects/RopeSim' passHref>
              <div className="cursor-pointer bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md transition-all duration-200 hover:bg-gray-400 hover:bg-opacity-30 dark:hover:bg-gray-600 mt-6">
                <span className='font-bold underline'>3D Rope Simulation</span><br />
                Constraint-based rope simulation created for Roped Together using C# and the Unity engine line renderer
              </div>
            </Link>

            {/* AI Hand Washing Tool */}
            <Link href='/projects/LayerJot' passHref>
              <div className="cursor-pointer bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md transition-all duration-200 hover:bg-gray-400 hover:bg-opacity-30 dark:hover:bg-gray-600 mt-6">
                <span className='font-bold underline'>AI Hand Washing Tool</span><br />
                Continued work with company <Link href='https://www.layerjot.com/' className='font-bold underline'>LayerJot</Link> on an AI computer vision hand washing coaching system
              </div>
            </Link>

            {/* Dance Performance 3D System */}
            <Link href='/projects/Dance' passHref>
              <div className="cursor-pointer bg-gray-400 bg-opacity-20 dark:bg-gray-500 dark:bg-opacity-20 px-6 py-4 rounded-md transition-all duration-200 hover:bg-gray-400 hover:bg-opacity-30 dark:hover:bg-gray-600 mt-6">
                <span className='font-bold underline'>Dance Performance 3D Procedural System</span><br />
                Created software in Unity 3D for procedural camera movement, lighting, and animation system for professional dance performance.
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}
