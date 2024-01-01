'use client'

 import  CountUp from 'react-countup'
 import Framer from "@/lib/framer"


export default function CountUpContainer  (){
    const stats = [
        { name: 'Locations', value: '2' },
        { name: 'Strong Community', value: '300' },
        { name: 'Days', value: '7' },
        ,
      ]



    return (                  
        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
    {stats.map((stat) => (
      <div key={stat.name} className="flex flex-col-reverse">
        <dt className="text-base leading-7 text-blue-700">{stat.name}</dt>
        <dd className="text-4xl font-bold leading-9 tracking-tight text-black">
          <Framer x={2} color={"white"} >
          <CountUp  duration={30} className='counter' end={stat.value} > </CountUp> <span>{stat.value >10 ? "+" : ""} </span>
          </Framer>
          </dd>
      </div>
    ))}
  </div>
    )
}