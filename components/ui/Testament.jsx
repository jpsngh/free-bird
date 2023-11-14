import React from 'react'
import Image from 'next/image'

const Testament = () => {
 const data = [{
  id : 1,
  date_day :"18",
  date_month:"JUL",
  category:"marketing",
  title:"The 400 Blows",
  comment:"Photo booth fam kinfolk cold-pressed Photo booth fam kinfolk cold-pressed Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  image:"https://dummyimage.com/103x103",
  author:"John"
 },{
    id : 2,
    date_day :"18",
    date_month:"JUL",
    category:"marketing",
    title:"The 400 Blows",
    comment:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing Photo booth fam kinfolk cold-pressed Photo booth fam kinfolk cold-pressed tousled waistcoat.",
    image:"https://dummyimage.com/103x103",
    author:"Donn"

 },{
    id : 3,
    date_day :"18",
    date_month:"JUL",
    category:"marketing",
    title:"The 400 Blows",
    comment:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    image:"https://dummyimage.com/103x103",
    author:"Ron"
 }]

  return (
   
      <section className="text-gray-600 body-font">
       
       
  <div className="container px-5 py-24 mx-auto">
  <div className='flex flex-col mx-20   my-20 flex-wrap  max-w-3xl'> 
        <h1 className='text-4xl font-bold    text-blue-800 hover:text-orange-400 transition'> Do not just take our word for it...</h1> 
        <h2 className='text-lg   text-gray-700 hover:text-orange-400 transition'> Lorem ipsum dolor sit amet consectetur adipisicing elit officia quod eum amet soluta sed repellat facere. Harum sapi</h2>
        </div>
      
  <hr className='p-2 m-3'></hr>
  

    <div className="flex flex-wrap -mx-4 -my-8">
    
{data.map((item)=>{
    return (

<div key={item.id}  className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{item.date_month}</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">{item.date_day}</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-orange-500 mb-1">{item.category}</h2>
            <h1 className="title-font text-xl font-medium text-blue-800 mb-3">{item.title}</h1>
            <p className="leading-relaxed mb-5">{item.comment}</p>
            <a className="inline-flex items-center">
              <Image alt="blog" src={item.image} height={200} width={200} className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">{item.author}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    )
})}
      


      </div></div>
      </section>
      
  
  )
}

export default Testament
