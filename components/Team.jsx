import Image from "next/image"
import Framer from '@/lib/framer'
import {getLeaderShip} from "@/sanity/lib/utils"


  
  export default async function Team() {
    const data = await getLeaderShip()


      


    const people = [
      {
        name: data[0]?.leaderName1 || 'Les Alexander' ,
        role: data[0]?.leaderRole1 || 'Co-Founder / CEO',
        imageUrl:
           data[0]?.leaderImage1 ||  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: data[0]?.leaderName2 || 'Sodhi Singh',
        role: data[0]?.leaderRole2 || 'Co-Founder / Trainer',
        imageUrl:
        data[0]?.leaderImage2 ||  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    
      },
      {
        name: data[0]?.leaderName3 || 'Ravneet Singh',
        role: data[0]?.leaderRole3 ||  'Trainer / CTO',
        imageUrl:
        data[0]?.leaderImage3 || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },{
        name: data[0]?.leaderName4 || 'Ravneet Singh',
        role: data[0]?.leaderRole4 ||  'Trainer / CTO',
        imageUrl:
        data[0]?.leaderImage4 ||  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
      // More people...
    ]

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-6 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people?.map((person) => (
              <li key={person.name}>
                <div className="flex border-2 rounded-full border-orange-500 p-2 items-center gap-x-6">
                  <Framer> 
                  <Image className="h-16 w-16 rounded-full" height={100} width={100} src={person.imageUrl} alt="" />
                  </Framer>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-blue-800">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  