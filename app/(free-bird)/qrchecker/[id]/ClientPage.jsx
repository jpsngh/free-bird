"use client"
import React, { useState,useCallback,useEffect } from 'react'
import Image from "next/image"
import { FaBirthdayCake, FaVenusMars, FaEnvelope, FaPhone, FaMapMarkerAlt,FaWeight,FaChessKnight,FaDatabase } from 'react-icons/fa';
import EditModal from '@/components/modals/EditModal';
import {notification} from 'antd'
import useSuccess from '@/hooks/useSuccess'
const ClientPage = ({data}) => {
  const successModal = useSuccess()
    const [open,setOpen] = useState(false);
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
      console.log("success", successModal.isSuccess)
      if(successModal.isSuccess){
        setTimeout(()=>{
          window.location.reload();
        },2500)
        successModal.onFailure()
      }
  
     
  
    
      
    }, [successModal])

 const handleEdit=useCallback(()=>{
       setOpen(true);


 },[setOpen])


  return (
    <div> 
        
       <EditModal data={data} open={open} api={api} setOpen={setOpen} ></EditModal> 
        <div>
     {contextHolder}
    <div className=" m-5 flex items-center justify-center">
      <div className="w-full md:max-w-full p-8 m-5 border-4 border-blue-800 rounded-lg shadow-md bg-white">
        {/* User Info Section */}
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center mb-6">
          <div className="col-span-1 md:col-span-1">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                src={data?.imageUrl}
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-2">
            <h1 className="text-2xl font-bold">{data?.firstName} <span> </span> {data?.lastName} </h1>
            <p className="text-gray-600">{data?.goal?data.goal:"Fitness Enthusiast"}</p>
          </div>
        </div>

        {/* General Info Section */}
        <div className="mb-6 ">
          <h2 className="text-xl font-bold mb-2">General Information</h2>
          <div className="flex flex-col">
          <ul className="text-gray-600 md:grid grid-cols-2 lg:grid-cols-3 gap-3 ">
            <li className="flex items-center mb-2"><FaBirthdayCake className="mr-2" /> Birthday: {data?.birthday?data.birthday:"Not specified"}</li>
            <li className="flex items-center mb-2"><FaVenusMars className="mr-2" /> Gender: {data?.gender?data.gender:"Not specified"}</li>
            <li className="flex items-center mb-2"><FaEnvelope className="mr-2" /> Email: {data?.email}</li>
            <li className="flex items-center mb-2"><FaPhone className="mr-2" /> Phone:  {data?.phone}</li>
            <li className="flex items-center mb-2"><FaWeight className="mr-2" /> Height:  {data?.height} cms</li>
            <li className="flex items-center mb-2"><FaChessKnight className="mr-2" /> Weight:  {data?.weight} kg</li>
            <li className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2" />{data?.address?data.address:"Please update your Info"}</li>
                        <li className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2" />{data?.address?data.address:"Please update your Info"}</li>
                        <li className="flex items-center mb-2"><FaDatabase className="mr-2" /> Admin Access:  {data?.isAdmin?"Yes":"No"}</li>
                        <li className="flex items-center mb-2"><FaDatabase className="mr-2" /> Trainer Access:  {data?.isTrainer?"Yes":"No"}</li>


                   </ul>   

                   <hr className="w-full h-1 m-2 "></hr>   
            <ul className="text-gray-600  md:grid grid-cols-3 gap-3">
          
            <li className="flex items-center mb-2"> Membership: {data?.paid? <div className=" shadow rounded-full  mx-3 p-2 text-green-700">Active </div>:<div className=" shadow rounded-full  mx-3 p-2 text-blue-800">Not Active </div>}</li>

          </ul>
          </div>
          <button   onClick={(data)=>handleEdit(data)}  className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-full hover:bg-orange-600 transition duration-300">
            Edit Information
          </button>
        </div>
    </div>
    </div>
    </div></div>
  )
}

export default ClientPage