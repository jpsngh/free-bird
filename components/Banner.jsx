import React from 'react'
import {getBanner} from "@/sanity/lib/utils"

const Banner = async () => {

  const data = await getBanner();

   console.log("banner",data)
  return (
    <div>

<div
  class="bg-blue-800 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
>
  <p class="text-center font-medium sm:text-left">
    {data[0]?.title }
    <br class="md:hidden" />
    {data[0]?.title2}
 
  </p>

  <a
    class="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-blue-800 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
    href={data[0]?.url}
  >
  {data[0]?.urlTitle}
  </a>
</div>

    </div>
  )
}

export default Banner