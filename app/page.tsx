import HelloWorld from './title.mdx'
import Subtitle from './subtitle.mdx'
import Github from './github.mdx'
import HomeBody from './homeBody.mdx'
import  Link  from 'next/link'
export default function page() {
  return (
    <div className='h-screen flex lg:justify-center justify-start bg-stone-200'>
     <div className='flex lg:w-5/12 items-start h-12'>
      <div className='mx-5'>
        <div className='text-4xl'>
          <HelloWorld/>
        </div>
        <div className='font-bold flex justify-start'>
          <div>marichter@chapman.edu | 503-509-2979</div>
        </div>
        <div className='font-bold flex justify-start'> 
          <Link href= "https://www.linkedin.com/in/maxwell-richter-0b8a671b9/" className='hover:bg-stone-300 rounded-md'> LinkedIn&nbsp;</Link>
          <Link href = "https://github.com/MaxRR921" className='hover:bg-stone-300 rounded-md'>GitHub </Link>
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
