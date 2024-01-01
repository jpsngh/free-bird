import React from 'react'
import { RichText } from '@/components/RichText';
import Image from 'next/image'
import {getSingleTransformation} from '@/sanity/lib/utils'
const page = async ({params}) => {
  const {slug} = params
  const trans = await getSingleTransformation(slug)
    return (
    


        <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
          <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
              <article class="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <div> Back </div>
                  <header class="mb-4 lg:mb-6 not-format">
                     
                      <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{trans?.title}</h1>
                  </header>
              
                  <figure>
                    <div className='flex flex-col md:flex-row gap-5 p-2 m-2  '>
                  <Image width={500} height={500} src={trans?.afterImage} alt="before"/>
                  <Image width={500} height={500} src={trans?.beforeImage} alt="after"/>
                  </div>
                      <figcaption> Fly with high spirits </figcaption>
                  </figure>

                    <hr className="h-2 w-full" />
                  <div className="p-1 my-2"> 
                  <RichText value={trans?.rich_body}  />

                  </div>
                
            
          
            </article>
            </div>
            </main>
          )
}

export default page
