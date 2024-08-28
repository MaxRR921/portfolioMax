import Title from './Title.mdx'
import Body from './Body.mdx'
export default function page() {
    return (
          <div className='h-screen flex lg:justify-center justify-start'>
            <div className='flex lg:w-5/12 items-start h-12'>
              <div className='mx-5'>
                <div className='text-4xl'>
                  <Title/>
                </div>
                <div>
                  <Body/>
                </div>
                <div><br></br>
                <iframe width = "100%" height="400" src="https://www.youtube.com/embed/odOtYnR6Ro4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe> <br></br>
                <iframe width = "100%" height="400" src="https://www.youtube.com/embed/WUwyAt25tLQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe> <br></br>
                
                </div>
              </div>
            </div>
          </div>
    )
  }