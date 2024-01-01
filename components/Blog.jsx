
  import { getPosts } from "@/sanity/lib/utils"
import Image from "next/image";
import Link from "next/link";
import Framer from "@/lib/framer"



  
  export default async function Blog() {
     const posts = await getPosts();

    
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
         
            <h2 className="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl"> Fitness Digest</h2>
            <p className="mt-2 text-lg leading-8 text-gray-500">
              Learn how to achieve your fitness goals with our expert insights.
            </p>
          </div>
          <Framer>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200   pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.splice(0,3).map((post) => (

              <article key={post.slug} class="relative overflow-hidden rounded-lg border shadow-lg transition hover:translate-y-2">
                <Link   href={`/blog/${post.slug}`}>
  <Image
    alt="Office"
    width={100}
    blur={true}
    height={60}
    src={post.image}
    class="absolute inset-0 h-full w-full object-cover"
  />

  <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div class="p-4 sm:p-6">
      <time datetime={post.publishedAt.slice(0,10)} class="block w-fit text-xs bg-orange-500 rounded shadow-md p-1 text-white/90"> {post.publishedAt.slice(0,10)} </time>

      
        <h3 class="mt-0.5 text-lg bg-blue-800 m-1 w-fit rounded p-1 text-white">{post.title}</h3>
     

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        
        {post.body.slice(0,100)}
      </p>
    </div>
  </div>
  </Link>
</article>
          
            ))}
          </div>
          </Framer>
        </div>
      </div>
    )
  }
  