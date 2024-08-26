import Title from './Title.mdx'
import Body from './Body.mdx'
export default function page() {
    return (
          <div className='h-screen flex md:justify-center justify-start'>
            <div className='flex lg:w-5/12 items-start h-12'>
              <div className='mx-5'>
                <div className='text-4xl'>
                  <Title/>
                </div>
                <div>
                  <Body/>
                </div>
              </div>
            </div>
          </div>
    )
  }