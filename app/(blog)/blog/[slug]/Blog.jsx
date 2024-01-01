
  "use client"
  import { usePathname,useSearchParams } from 'next/navigation';
  import {ArrowLeftOutlined} from "@ant-design/icons"
import Image from 'next/image';
import Link from 'next/link';
import { RichText } from '@/components/RichText';
const Blog = ({title,
    rich_body,
  author_image,
  author_name,
  publishedAt,
  _id,
  
  author_slug,
  body,
  author_role,
  image}) => {

    const path = usePathname()
    console.log(path)
    console.log("image",image)
 
  return (
    


<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article class="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <Link href="/blog" className="my-5 p-2 font-bold text-3xl " > <ArrowLeftOutlined /> </Link>
          <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <Image height={100} width={100}  class="mr-4 w-16 h-16 rounded-full" src={author_image} alt="Jese Leos"/>
                      <div>
                          <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{author_name}</a>
                          <p class="text-base text-gray-500 dark:text-gray-400">{author_role}</p>
                          <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime={publishedAt} title="February 8th, 2022">{publishedAt}</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{title}</h1>
          </header>
         
          <figure>
          <Image className="p-2 my-2 mx-auto" width={500} height={500} src={image} alt="hheheh"/>
              
         
          <figcaption> Fly with high spirits </figcaption>
            
                    <hr className="h-2 m-2 w-full" />
                  <div className="p-1 my-2">
     

          <RichText value={rich_body}  />
         
</div>
    
</figure>
  
    </article>
    </div>
    </main>
  )
}

export default Blog
