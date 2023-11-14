import React from 'react'

const Locations = () => {
  return (
   
    
    <div className='bg-white h-full w-full mx-50 px-5  relative hidden md:block'>
        <div className='flex flex-col justify-items-end  mx-20 left-0  my-50  flex-wrap  max-w-3xl'> 
        <h1 className='text-4xl font-bold    text-orange-400 hover:text-blue-800 transition'> Serving you at two locations</h1> 
        <h2 className='text-lg   text-gray-700 hover:text-blue-800 transition'> Lorem ipsum dolor sit amet consectetur adipisicing elit officia quod eum amet soluta sed repellat facere. Harum sapi</h2>
        </div>
        <hr className='m-5 p-2'></hr>
      <section className="text-gray-600 body-font relative px-4 flex flex-row m-2">
      
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
  
    <div className="  bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map"  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{filter: " contrast(1.2) opacity(0.4);"}}>

      </iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className=" px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1"> 4 boulevard ,Missisauga</p>
        </div>
        <div className=" px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-yellow-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    </div>
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className=" bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe width={"100%"} height={"100%"} className="absolute inset-0" frameBorder={"0"} title={"map"} marginHeight={"0"} marginWidth={"0"} scrolling={"no"} src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{filter: " contrast(1.2) opacity(0.4);"}}></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">96 fallingdale, Brampton</p>
        </div>
        <div className=" px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-yellow-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    
  </div>
</section>
    </div>
  )
}

export default Locations
