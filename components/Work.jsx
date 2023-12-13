 
 'use client'
import Image from 'next/image'
 import  CountUp from 'react-countup'
 import Framer from "@/lib/framer"

const links = [
    { name: 'One on One Training', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our Coaches', href: '#' },
  ]
  const stats = [
    { name: 'Locations', value: '2' },
    { name: 'Strong Community', value: '300' },
    { name: 'Days', value: '7' },
    ,
  ]
  
  export default function Work() {
    return (
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
       
      
       
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
          <div className="mx-auto max-w-2xl lg:mx-0">
          <Framer x={2} color={"orange"}>
            <h2 className="text-4xl font-bold tracking-tight text-orange-500 sm:text-6xl">Train with us</h2>
            </Framer>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
          
          <div className=" absolute  right-2   top-10 hidden lg:block">
            <Image src="https://www.kettlebellkings.com/cdn/shop/articles/Back_Muscles.png?v=1694673237" width={400} height={300} alt="body"></Image>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-blue-800 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-blue-700">{stat.name}</dt>
                  <dd className="text-4xl font-bold leading-9 tracking-tight text-black">
                    
                    <CountUp  duration={30} className='counter' end={stat.value} > </CountUp> <span>{stat.value >10 ? "+" : ""} </span>
                    </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  