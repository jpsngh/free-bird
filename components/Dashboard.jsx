"use client"
import React from 'react'
import InfoCards from '../app/(free-bird)/free-bird/InfoCards'
import useCurrentUser from '@/hooks/useCurrentUser'
import Loading from '../app/loading'
import useAllUser from '@/hooks/useAllUsers'
import TrainerPortal from './ui/TrainerPortal'

const Dashboard = () => {

    const {data,isLoading} =  useCurrentUser()
    const {data:users} = useAllUser("/api/allUsers")

    if(isLoading) {
    return <Loading></Loading> 
    
    }
  

    else if (!data?.isAdmin){
        return <div className='flex justify-center flex-col items-center text-blue-800 m-[100px] text-lg'> 404 Not Authorized Access </div>
    }

   

  else return (
    <div className='  bg-white m-5 w-full flex items-center justify-center flex-col   gap-2'>

        <h2 className="text-xl text-blue-800 shadow-sm">   Admin  Dashboard  </h2>
       
       <div className= ' w-[50%] m-2 grid grid-cols-2 gap-2'>

       <div className='col-span-2'>  
       <InfoCards data={users} url={"/free-bird/clients"}  ></InfoCards>
       
       </div>
      
        <InfoCards data={users} url={"/free-bird/clients"} ></InfoCards>
        <InfoCards data={users} url={"/free-bird/clients"} ></InfoCards>

       </div>

    </div>
  )
}

export default Dashboard
