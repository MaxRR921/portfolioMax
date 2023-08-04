import HelloWorld from './title.mdx'
import Subtitle from './subtitle.mdx'
export default function page() {
  return (
    <div className='h-screen flex md:justify-center justify-start bg-stone-200'>
     <div className='flex md:w-5/12 items-start h-12'>
      <div className='mx-5'>
        <div className='text-2xl'>
          <HelloWorld/>
        </div>
          <Subtitle/>
      </div>
      </div>
    </div>
  )
}
