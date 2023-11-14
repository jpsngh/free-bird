import React from 'react'

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
   
      <section class="text-gray-600 body-font">
       
       
  <div class="container px-5 py-24 mx-auto">
  <div className='flex flex-col mx-20   my-20 flex-wrap  max-w-3xl'> 
        <h1 className='text-4xl font-bold    text-blue-800 hover:text-orange-400 transition'> Do not just take our word for it...</h1> 
        <h2 className='text-lg   text-gray-700 hover:text-orange-400 transition'> Lorem ipsum dolor sit amet consectetur adipisicing elit officia quod eum amet soluta sed repellat facere. Harum sapi</h2>
        </div>
      
  <hr className='p-2 m-3'></hr>
  

    <div class="flex flex-wrap -mx-4 -my-8">
    
{data.map((item)=>{
    return (

<div key={item.id}  class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{item.date_month}</span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">{item.date_day}</span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-orange-500 mb-1">{item.category}</h2>
            <h1 class="title-font text-xl font-medium text-blue-800 mb-3">{item.title}</h1>
            <p class="leading-relaxed mb-5">{item.comment}</p>
            <a class="inline-flex items-center">
              <img alt="blog" src={item.image} class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900">{item.author}</span>
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
