
import Layout from "./Layout"
export const dynamic = 'force-dynamic'


import { getPosts } from "@/sanity/lib/utils";



const  page = async() => {
 const data = await getPosts();

return (
 
  <div className="flex flex-col justify-center items-center"> 
          <h1 className="font-semibold text-3xl m-5 ">Welcome to Fitness Digest + </h1>
       
  <Layout data={data} ></Layout>
  

  </div>
 
  )
  
}

export default page
