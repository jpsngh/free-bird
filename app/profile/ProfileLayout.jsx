"use client"

import useCurrentUser from "hooks/useCurrentUser"
import { FaBirthdayCake, FaVenusMars, FaEnvelope, FaPhone, FaMapMarkerAlt,FaWeight,FaChessKnight } from 'react-icons/fa';
import Loading from '../loading';
import {useCallback,useEffect} from "react"
import {QRCode,Image} from "antd"
import { useRouter } from 'next/navigation'
import useSuccess from 'hooks/useSuccess'
import useRegisterModel from "hooks/useRegisterModal";
import  Link  from 'next/link';



   

const ProfileLayout = () => {

 const router = useRouter()
  const successModal = useSuccess()
  const registerModal = useRegisterModel()

 

  useEffect(() => {
    console.log("success", successModal.isSuccess)
    if(successModal.isSuccess){
      setTimeout(()=>{
        window.location.reload();
      },2500)
      successModal.onFailure()
    }

   

  
    
  }, [successModal,router])
  
  const handleRegister = useCallback(()=>{
    if(registerModal.isOpen){
        return null
    }
    return registerModal.onOpen()

  },[registerModal])

    const {data,isLoading} = useCurrentUser()
  console.log("userprofile",data)

    if(isLoading){
       return <div> <Loading></Loading> </div>
    }
  
    const date = new Date(data?.joinedAt)
    console.log(data, "date",date.toString())
  
   
  return (
  
    <div className=" m-5 flex items-center justify-center">
      <div className="w-full md:max-w-full p-8 m-5 border-4 border-blue-800 rounded-lg shadow-md bg-white">
        {/* User Info Section */}
        {  console.log("success", successModal.isSuccess)}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center mb-6">
          <div className="col-span-1 md:col-span-1">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                src={data?.imageUrl}
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-2">
            <h1 className="text-2xl font-bold">{data?.firstName} <span> </span> {data?.lastName} </h1>
            <p className="text-gray-600">{data?.bio?data.bio:"Fitness Enthusiast"}</p>
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
                   </ul>   

                   <hr className="w-full h-1 m-2 "></hr>   
            <ul className="text-gray-600  md:grid grid-cols-3 gap-3">
            <li className="flex items-center mb-2">BMR: <span></span>{data?.bmr?data.bmr: <Link href="/bmr" className=" rounded-full text-sm border mx-3 p-2 text-orange-500 active:text-blue-800"> Get BMR
          </Link>}</li>
            <li className="flex items-center mb-2"> Membership: {data?.paid? <div className=" shadow rounded-full  mx-3 p-2 text-green-700">Active </div>:<div className=" shadow rounded-full  mx-3 p-2 text-blue-800">Not Active </div>}</li>
            <li className="flex items-center mb-2">Joined at: {date?.toDateString()}</li>
          </ul>
          </div>
          <button onClick={handleRegister} className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-full hover:bg-orange-600 transition duration-300">
            Edit Information
          </button>
        </div>

        <hr className="w-full h-1 m-2 "></hr>  

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Barcode</h2>

      
  
 
             <QRCode value={`https://localhost:3000/free-bird/qrchecker/${data?.id}`}></QRCode>
            
         
              </div>
            



        <hr className="w-full h-1 m-2 "></hr>  



        {/* Assigned Trainer Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Assigned Trainer</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
            <div className="col-span-1 md:col-span-1">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={data?.assignedTrainer?.trainerProfileUrl}
                  alt="Trainer"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-2">
              <h3 className="text-lg font-semibold">{data?.assignedTrainer?.trainerName}</h3>
              <Link href={`/author/${data?.assignedTrainer?.trainerSlug}`} className="text-gray-600">Trainer Profile</Link>
            
            </div>
          </div>
        </div>

        <hr className="w-full h-1 m-2 "></hr>  
        {/* Workouts and Diet Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">Workouts and Diet</h2>
          <Image src={data?.diet?.dietUrl} alt="workout" width={200} height={200} className="text-gray-600"></Image>
        </div>
      </div>
      </div>
  

 
  )
}

export default ProfileLayout


