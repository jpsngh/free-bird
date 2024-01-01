

import {RichText} from "@/components/RichText"
import {getSingleCareer} from "@/sanity/lib/utils" 
import Image from "next/image"
const page = async ({params}) => {

  const {slug}= params

  const data = await getSingleCareer(slug);
  console.log(" carrer data",data)
  return (
    <div className="flex flex-col md:justify-center md:items-center w-full gap-5 my-5 p-3">

         <div className="flex flex-col items-start justicy-start w-full gap-2 p-2"   > 

        <h1  className="text-3xl font-bold text-blue-800"> Job Title : {data?.title} </h1>
        <p classname="text-md left-0 absolute" >Date posted : {data?.publishedAt?.slice(0,10)} </p>
           </div>

              <Image className="p-5 mx-auto my-auto" src={data?.image} height={150} width={250}  /> 

                <div className="  flex flex-col gap-5 justify-start items-start  flex-wrap md:w-fit w-screen p-5  my-5">

                   
                    
                <RichText value={data?.rich_body} > </RichText>
                   
                    
                      <button  className="bg-orange-500 text-white border rounded p-3 cursor-pointer active:opacity-50  " > <a href={`mailto:someone@yoursite.com?subject=Application for ${data?.title} posted at ${data?.publishedAt.slice(0,10)}&body=Hi, thanks for showing interest,please mention why you are fit for this job and attach the resume alongside.  `}>Apply</a>  </button>

                     </div>

       
  </div>
  )
}

export default page

