import React from 'react'
import Transformations from '../../components/Transformations';
import Cta from '@/components/ui/Cta';
import {getTransformations} from '@/sanity/lib/utils'
const page = async() => {

  const transform = await getTransformations();
  
    const data = [{
        key : 1
    },{
        key:2
    },{
        key:3
    },{
        key:4
    },{
        key :5
    }]


  return (
    <div>
        <Cta slug="transformations"></Cta>

     <hr className='w-full h-1 ' />
     <div className='flex justify-center gap-2 m-2 p-2 flex-col items-center'> 
     <h2 className='text-2xl text-blue-800' > Transformations </h2>
     <hr className='w-full h-1 ' />
     <p className='text-gray-500 text-sm' > We take Immense pride in changing our clients lives through our dedicated hardworking trainers  </p>
     </div>
       <div className='grid grid-col md:grid-col-3 lg:grid-col-4 gap-5' >
       <ul className="mt-8 grid grid-cols-1  lg:grid-cols-4 gap-5 p-5">
        {

            transform?.map((data)=>
            {
              console.log("trans",data)
              return ( 
                <li key={data?.slug}>
                <a href={`/transformations/${data?.slug}`} className="group relative block">                
                
                <div  className="relative  h-[350px] sm:h-[450px]">
                <img
                  src={data?.beforeImage}
                  alt="image"
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                />
            
                <img
                  src={data?.afterImage}
                  alt="image"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                />
              </div>
              
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium text-white bg-blue-800 p-1"> {data?.title}</h3>

    <p className="mt-1.5 max-w-[40ch] text-xs text-white">
 {data?.body}
    </p>

    <span
      className="mt-3 inline-block bg-orange-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      Check it Out
    </span>
  </div>
</a> </li>)
            })
        
      }
        </ul>

       </div>
      
     

         

    </div>
  )
}

export default page