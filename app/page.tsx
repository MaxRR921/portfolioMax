import HelloWorld from './title.mdx'
import Subtitle from './subtitle.mdx'
import Github from './github.mdx'
import HomeBody from './homeBody.mdx'
export default function page() {
  return (
    <div className='h-screen flex md:justify-center justify-start bg-stone-200'>
     <div className='flex md:w-5/12 items-start h-12'>
      <div className='mx-5'>
        <div className='text-4xl'>
          <HelloWorld/>
        </div>
        <div className='text-lg flex justify-start'>
          <Subtitle/>
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
