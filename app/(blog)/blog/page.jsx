
import Layout from "./Layout"
export const dynamic = 'force-dynamic'
import Cta from "@/components/ui/Cta"

import { getPosts } from "@/sanity/lib/utils";



const  page = async() => {
 const data = await getPosts();

return (
 
  <div className="flex flex-col justify-center items-center gap-5"> 

          <div className="w-full"> 
          <Cta slug="blog"></Cta>

          </div>
          <h1 className="font-semibold text-3xl m-5 ">Welcome to Fitness Digest + </h1>
    

  <hr className="h-1 w-full  flex-1 bg-black"></hr>

  <h1 className="font-semibold text-2xl m-5 ">Latest Articles </h1>
 


  <Layout data={data} ></Layout>
  

  </div>
 
  )
  
}

export default page
