
  "use client"
  import { usePathname,useSearchParams } from 'next/navigation';

import Image from 'next/image';
const Blog = ({title,
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
          <p class="lead">{body}</p>
          <figure>
          <Image width={500} height={500} src={image} alt="hheheh"/>
              <figcaption>Digital art by Anonymous</figcaption>
          </figure>
          <h2>Getting started with Flowbite</h2>
          <p>First of all you need to understand how Flowbite works. This library is not another framework.
              Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
              documentation.</p>
          <p>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
              and datepickers which you can optionally include into your project via CDN or NPM.</p>
          <p>You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/">quickstart
                  guide</a> to explore the elements by including the CDN files into your project. But if you want
              to build a project with Flowbite I recommend you to follow the build tools steps so that you can
              purge and minify the generated CSS.</p>
          <p>You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help
              you get started with your projects even faster. You can check out this <a
                  href="https://flowbite.com/docs/components/tables/">comparison table</a> to better understand
              the differences between the open-source and pro version of Flowbite.</p>
          <h2>When does design come in handy?</h2>
          <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
              will come in handy:</p>
        
    
  
    </article>
    </div>
    </main>
  )
}

export default Blog
