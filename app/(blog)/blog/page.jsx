
import Layout from "./Layout"


import { Suspense } from "react";
import Loading from "@/app/loading";

import { getPosts } from "@/sanity/lib/utils";



const  page = async() => {
 const data = await getPosts();

return (
 
  <div className="flex flex-col justify-center items-center"> 
          <h1 className="font-semibold text-3xl m-5 ">Welcome to Fitness Digest + </h1>
          <Suspense fallback={<Loading/>}> 
  <Layout data={data} ></Layout>
  </Suspense>

  </div>
 
  )
  
}

export default page
