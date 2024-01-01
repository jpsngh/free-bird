import React from 'react'
import {getLocations} from '@/sanity/lib/utils'
import { FaLocationDot } from "react-icons/fa6";
const Locations = async () => {

  const data = await getLocations();

  return (
    <div>

<section>
  <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className=" p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-blue-800  md:text-3xl">
         {data?.headline ||  "We are at now two locations"}
          </h2>

          <p className="hidden text-gray-600 sm:mt-4 sm:block">
           {data?.body || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam   sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet  volutpat quisque ut interdum tincidunt duis"}
          </p>

          <div className="flex flex-row text-gray-500 items-center justify-center gap-5 m-5 p-2" >
            
              <p className="flex flex-row gap-1 text-orange-500" > <FaLocationDot /> <span className="text-gray-600" > {data?.address1 || "Brampton"} </span> </p>
              <p className="flex flex-row gap-1 text-blue-800" > <FaLocationDot /> <span className="text-gray-600"> {data?.address2 || "Missisauga"}</span> </p>
            
             </div>

          <div className="mt-4 md:mt-8">
            <a
              href={data?.url || "#"}
              className="inline-block rounded border border-orange bg-white px-12 py-3 text-sm font-medium text-orange-500 transition hover:bg-transparent hover:text-blue-800 focus:outline-none focus:ring focus:ring-yellow-400"
            >
             { data?.btn || " Explore Today"}
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Student"
          src={data?.firstImage || "https://lh5.googleusercontent.com/p/AF1QipNvgLSlQmyd8MbcAJ1VSUBqo7ak98DODvJjiA6u=w141-h176-n-k-no-nu"}
          className="h-40 w-full object-cover sm:h-56 md:h-fit"
        />

        <img
          alt="Student"
          src={data?.secondImage||"https://lh3.googleusercontent.com/p/AF1QipO4HmAeiCeiJLcshrr97JbY6KaqW8RkpGXuEI3B=s1360-w1360-h1020"}
          className="h-40 w-full object-cover sm:h-56 md:h-fit"
        />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Locations