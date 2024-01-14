import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import Cta from '@/components/ui/Cta'
import { Timeline } from 'antd';
import {getCareers} from "@/sanity/lib/utils" 
const page = async () => {

  const data = await getCareers();
  const d = new Date();

return (
    <div className="m-5 p-1 text-3xl ">

        <Cta slug="careers"> </Cta>

        <div className=" w-full flex flex-col justify-center items-center gap-5 my-5 p-5"
        > 
           
         <h2>  We are Hiring, Be a part of our inclusive,community based team </h2>


       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 p-2"> 
           {data?.map((job)=>{ return ( <article key={job.id} className="flex bg-white transition hover:shadow-xl">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="2022-10-10"
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
    >
      <span>{job?.publishedAt?.slice(0,4)}</span>
      <span className="w-px flex-1 bg-gray-900/10"></span>
      <span>{(job?.publishedAt?.slice(5,10))}</span>
    </time>
  </div>

  <div className="hidden sm:block sm:basis-56">
    <img
      alt="Guitar"
      src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900">
         {job?.title}
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
         {job?.body}
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <a
        href={`/careers/${job?.slug}`}
        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
      >
        Read Posting
      </a>
    </div>
  </div>
</article> )})
}


            </div>

        </div> 
        </div> )}

        export default page