import React from 'react'

import {getTransformations} from '@/sanity/lib/utils'

const Transformations = async() => {


  const data = await getTransformations();




  return (
    <div>

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-left">
      <h2 className="text-3xl font-bold text-blue-800 shadow-sm w-fit  ">Transformations</h2>

      <p className=" mt-4 max-w-md text-left text-gray-500">
     We take immense pride in transforming our members life be it fat loss or changing their body into the best humanly possible form
      </p>
    </header>

    <ul className="mt-8 grid grid-cols-1 gap-2 lg:grid-cols-4">
      <li>
      <a href={`/transformations/${data[0]?.slug}`} className="group relative block">
  <div className="relative  h-[350px] sm:h-[450px]">
    <img
      src={data[1]?.beforeImage || "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=2798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      alt="image"
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src={data[1]?.afterImage ||"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      alt="image"
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium text-white bg-blue-800 p-1"> {data[0]?.name || "Singh Transformation"}</h3>

    <p className="mt-1.5 max-w-[40ch] text-xs text-white">
     {data[0]?.body || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit  aperiam ipsum"}
    </p>

    <span
      className="mt-3 inline-block bg-orange-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      Check it Out
    </span>
  </div>
</a>
      </li>

      <li>
      <a href="/transformations" className="group hidden  relative md:block">
  <div className="relative  h-[350px] sm:h-[450px]">
    <img
      src={data[1]?.beforeImage || "https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      alt="image"
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src={data[1]?.afterImage || "https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
      alt="image"
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium bg-blue-800 text-white"> {data[1]?.name || "King Transformation"}</h3>

    <p className="mt-1.5 max-w-[40ch] text-xs text-white">
    {data[1]?.body || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit  aperiam ipsum"}
    </p>

    <span
      className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide bg-orange-500 text-white"
    >
      Check it Out
    </span>
  </div>
</a>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="/transformations" className="group hidden relative md:block">
          <img
            src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">All Transformations</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
             Right Here
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>

    </div>
  )
}

export default Transformations