'use client'
import Title from './Title.mdx'
import Body from './Body.mdx'
import  Link  from 'next/link'
export default function page() {
    return (
          <div className='h-screen flex lg:justify-center justify-start'>
            <div className='flex lg:w-5/12 items-start h-12'>
              <div className='mx-5'>
                <h1>Projects</h1>
                <div>
                  <br>
                  </br>
                  <Link href = '/projects/stressSensor' className='font-bold hover:bg-stone-700 rounded-md underline'>Fiber Optic Stress Sensor<br></br></Link> 
                  Stess sensor to evaluate material characteristics of different tissues
                </div>
                <div>
                  <br>
                  </br>
                  <Link href = '/projects/RopedTogether' className='font-bold hover:bg-stone-700 rounded-md underline'> Roped Together<br></br> </Link>
                  3D mountain climbing game. Winner at Oregon Game Project Challenge 2022
                </div>
                <div>
                  <br>
                  </br>
                  <Link href = '/projects/RopeSim' className='font-bold hover:bg-stone-700 rounded-md underline'> 3D Rope Simulation <br></br> </Link>
                  Constraint based rope simulation created for Roped together using C# and the unity engine line renderer
                </div>
                <div>
                  <br>
                  </br>
                  <Link href = '/projects/LayerJot' className='font-bold hover:bg-stone-700 rounded-md underline'> AI Hand Washing Tool <br></br> </Link>
                  Continued work with company <Link href = 'https://www.layerjot.com/' className='font-bold hover:bg-stone-700 rounded-md underline'>LayerJot</Link>  on an AI computer vision hand washing coaching system
                </div>
                <div>
                  <br>
                  </br>
                  <Link href = '/projects/Dance' className='font-bold hover:bg-stone-700 rounded-md underline'> Dance Performance 3D procedural system <br></br> </Link>
                  Created software in Unity 3D for procedural camera movement, lighting and animation system for professional dance performance.
                </div>
              </div>
            </div>
          </div>
    )
  }