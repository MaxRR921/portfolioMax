import HelloWorld from './title.mdx'
import Subtitle from './subtitle.mdx'
import Github from './github.mdx'
import HomeBody from './homeBody.mdx'
import  Link  from 'next/link'
export default function page() {
  return (
    <div className='h-screen flex lg:justify-center justify-start text-white'>
     <div className='flex lg:w-5/12 items-start h-12'>
      <div className='mx-5'>
        <h1 className='text-4xl text-white'>Maxwell Richter</h1>
        <div className='font-bold flex justify-start text-white'>
          <div>marichter@chapman.edu | 503-509-2979</div>
        </div>
        <div className='font-bold flex justify-start'> 
        <Link href="https://www.linkedin.com/in/maxwell-richter-0b8a671b9/" className='rounded-md underline pr-4'>
          <span className='hover:bg-stone-400'>
            LinkedIn&nbsp;
          </span>
        </Link>
        <Link href="https://github.com/MaxRR921" className='rounded-md underline pl-4'>
          <span className='hover:bg-stone-400'>
            GitHub
          </span>
        </Link>
        </div>
        <div>
          <HomeBody/>
        </div>
      </div>
      <div>
      </div>
      </div>
    </div>
  )
}
