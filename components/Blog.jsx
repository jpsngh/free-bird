
  import { getPosts } from "@/sanity/lib/utils"
import Image from "next/image";
import Link from "next/link";
    
  
  export default async function Blog() {
     const posts = await getPosts();

    
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl"> Fitness Digest</h2>
            <p className="mt-2 text-lg leading-8 text-orange-400">
              Learn how to achieve your fitness goals with our expert insights.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.splice(0,3).map((post) => (
              <article key={post._id} className="flex max-w-xl border p-5 flex-col items-start shadow-md hover:shadow-xl justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.publishedAt.slice(0,10)} className="text-gray-500">
                    {post.publishedAt.slice(0,10)}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    General
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link  href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.body}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image src={post.author_image} alt="" className="h-10 w-10 rounded-full bg-gray-50" width={10} height={10} />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={`/author/${post.author_slug}`}>
                        <span className="absolute inset-0" />
                        {post.author_name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author_role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  