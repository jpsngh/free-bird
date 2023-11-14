
"use client"
import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const BlogCard = ( {title,author,text,image,slag} ) => {
  console.log("Slag",slag)
 const router = useRouter();
  const href=`/blog/${slag}`;
  console.log(title)


  console.log("href",href)
  return (
   
    <div   >
      <Link href={`/blog/${slag}`}> 
      <div   className="group relative block bg-black">
  <Image
    alt="Developer"
    src={image?image:"https://cdn.sanity.io/images/6rirx32u/production/e0aae83281bb52b803420dcc2b6a7ad8b0bf2255-866x1390.jpg"}
    height={400}
    width = {400}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />
  
  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
 {author}
   
    </p>
  
    <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
        {text}
        </p>
      </div>
    </div>
  </div>
</div>
</Link>
    </div>
  )
}

export default BlogCard
