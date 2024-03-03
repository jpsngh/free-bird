"use client"
import { useState,useRef } from "react";
import {Avatar} from "antd"
import { UserOutlined } from '@ant-design/icons';
import Framer from "@/lib/framer"





const Testimonials = ({testData}) => {


   const [testament,setTestament] = useState(0)
  
   const descData = [{
    key:1,
    description:testData[0]?.review ||"“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. No need to think twice before making it”",
    name:  testData[0]?.name ||"Justice",
    role: testData[0]?.authorWork || "Manager,Ca"
    
    
    },
    
    {
      key:2,
      description:testData[1]?.body ||"“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. No need to think twice before making it”",
      name:  testData[1]?.name ||"Ramesh",
      role: testData[1]?.authorWork || "Manager,Ca"
      
      
      },
        {
          key:3,
          description:testData[2]?.body ||"“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. No need to think twice before making it”",
          name:  testData[2]?.name ||"Karan",
          role: testData[2]?.authorWork || "Labour,Ca"
          
          
          
      }]

    return ( <section>
  <div className="flex flex-col justify-start  md:flex-row my-10 gap-2 py-10 md:px-10 md:py-10" >

    <div className=" description  w-xl flex flex-col gap-5" >

      <h2  className="text-3xl text-blue-800 font-bold">
        What our Customer says
      </h2>
      
      {[descData[testament]].map((data)=>{
    return    <div key={data.key} > 
    <Framer >
 <div className="mt-10 py-5 md:w-[80%]"> 
<p className=" w-fit font-serif text-xl  md:text-3xl  text-black" >
      {data.description}
      </p>  
      </div>
<div >
    <div className="mt-10 shadow-lg"> <p className="font-bold  text-orange-500 text-lg" > {data.name}</p> <span> </span> <p className="text-lg text-blue-800" >{data.role}</p> </div>
  </div>
  </Framer>
  </div>

      })}
      


    </div>

    
    <div  className="flex flex-row md:flex-col gap-5 md:mr-[200px] mt-5 " >

      <div className={` " ${testament===0?"border-2 ":""} rounded-full border-spacing-5 border-orange-500 shadow-lg   "`}>
       
    <Avatar src={testData[0]?.authorImage} onClick={()=>setTestament(0)} shape="circle" value={0} size={64} icon={<UserOutlined />} />
      </div>
      <div className={` " ${testament===1?"border-2":""} rounded-full border-spacing-5 border-blue-500 shadow-lg   "`}>
       
       <Avatar src={testData[1]?.authorImage} onClick={()=>setTestament(1)} shape="circle" value={1} size={64} icon={<UserOutlined />} />
         </div>
         <div className={`" ${testament===2?"border-2":""} rounded-full border-spacing-5 border-green-800 shadow-lg "`}>
       
       <Avatar src={testData[2]?.authorImage} onClick={()=>setTestament(2)} shape="circle" value={2} size={64} icon={<UserOutlined />} />
         </div>
        

    </div>



      
 
 </div>


    </section>

     );
}
 
export default Testimonials;