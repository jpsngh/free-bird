 

import Image from 'next/image'
import CountUpContainer from './CountUp'
import Framer from "@/lib/framer"
import Link from "next/link"
import { getWork} from "@/sanity/lib/utils";
 


  const stats = [
    { name: 'Locations', value: '2' },
    { name: 'Strong Community', value: '300' },
    { name: 'Days', value: '7' },
    ,
  ]
  
  export default async function Work() {

    const data = await getWork();
  console.log(" btn1",data[0].btn1,"href",data[0].url)
    const links = [
      { name: `${data[0]?.btn1}`, href: data[0]?.url },
      { name: `${data[0]?.btn2}`, href: `${data[0]?.url1}` },
      { name: `${data[0]?.btn3}`, href: `${data[0]?.url2}` },
      { name:`${data[0]?.btn4}`, href: `${data[0]?.url3}`},
    ]
 

    return (
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
       
      
       
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
          <div className="mx-auto max-w-2xl lg:mx-0">
          <Framer x={2} color={"white"}>
            <h2 className="text-4xl font-bold tracking-tight leading-8 text-orange-500 sm:text-4xl">{data[0]?.headline}</h2>
  
            <p className="mt-6 text-lg/2 md:text-lg lg:text-xl  text-gray-500">
             {data[0]?.content}
            </p>
            </Framer>
          </div>

          <div className="  absolute right-2   top-10 bottom-5 hidden lg:flex">
          <Image  src={data[0]?.image} width={500} height={300} alt="body"></Image>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-blue-800 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links?.map((link) => (
             <Link key={link.name} href={link.href}>
                  {link.name} 
                </Link> 
              ))}
            </div>
            <CountUpContainer/>
                
              
          </div>
        </div>
      </div>
    )
  }
  