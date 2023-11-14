'use client'
import BlogCard from "./BlogCard"

import { useCallback, useState } from "react"




const Layout = ({data}) => {



  const [limit,setLimit] = useState(5);
  const [lLimit,setLLimit] = useState(0)
  console.log(data)
  const handle =  useCallback(()=>{
    if(limit <= 15) {
       return setLimit(limit+5)
    }
    else  {
        setLLimit(lLimit + 5)
        setLimit(limit+5)

    }

  },[limit,lLimit])
  let arr = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17]

  return (
    <div className="flex  flex-col justify-center gap-5 items-center">



     <div className="grid md:grid-cols-3 justify-center items center w-xl gap-5 " >

      {data.map((dat)=>{
    

        return  (    <div key={dat._id} className="p2 m-5 shadow-lg w-3/2" > <BlogCard  title={dat.title} author={dat.author_name} text={dat.body} image={dat.image} slag={dat.slug} ></BlogCard>

        </div> )
    
    
      })}
   
  


     </div>

     <button onClick={handle}> Load More... </button>
    </div>
  )
}

export default Layout