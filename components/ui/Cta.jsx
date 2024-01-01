import React from 'react'

function Cta({image,title,description,buttonText}) {
  return (
    <div>

<section
  className="overflow-hidden  bg-[url(https://f45training.com/wp-content/uploads/2023/12/hero-blog.jpg)] bg-cover  bg-top bg-no-repeat"
>
  <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className=" flex flex-col justify-center items-center text-center ">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Free Bird Fitness</h2>
    
    <div className="text-center">
      <p className="hidden max-w-lg text-center text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
        doloribus iure architecto quae voluptatum beatae excepturi dolores.
      </p>
</div>
      <div className="mt-4 sm:mt-8">
        <a
          href="#"
          className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Keep Feeding your Fitness Knowledge
        </a>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Cta