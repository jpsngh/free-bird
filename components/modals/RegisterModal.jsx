'use client'
import InputComponent from '../ui/InputComponent'
import React, { useCallback,useEffect,useState } from 'react'
import useCurrentUser from "@/hooks/useCurrentUser"
import { useRouter } from 'next/navigation'
import useRegisterModel from '@/hooks/useRegisterModal'
import AntModal from "./AntModal"
import useSuccess from '@/hooks/useSuccess'
import axios from 'axios'
import Loading from '@/app/loading'
import { useEdgeStore } from '@/lib/edgestore';
import {Avatar,Button} from "antd"

const RegisterModal = () => {


    const successModal = useSuccess()
    const { edgestore } = useEdgeStore()
    const router = useRouter();
    const {data,isLoading} = useCurrentUser();


    const [firstName,setFirstName] = useState(data?.firstName)
    const [lastName,setLastName] = useState(data?.lastName)
    const [email,setEmail] = useState(data?.email);
    const [phone,setPhone] = useState(data?.phone);
    const [gender,setGender] = useState(data?.gender);
    const [height,setHeight] = useState(data?.height);
    const [weight,setWeight] = useState(data?.weight);
    const [goal,setGoal] = useState(data?.goal);
    const [loading,setLoading] = useState(false)
    const [ profileImage,setProfileImage] = useState(data?.imageUrl)
    const [ file,setFile] = useState()

    
    const registerModal = useRegisterModel()
    

   
 useEffect(()=>{
    if(profileImage){
        console.log(profileImage)
    }
  
 },[profileImage])


    const onSubmit = useCallback(async()=>{
        try{
          
            setLoading(true)
            // todo login and regsiter
          const success =    await axios.post('/api/update',{
                email,
                phone,
                firstName,
                lastName,
                height,
                weight,
                goal,
                gender,
                imageUrl : profileImage

                
            })
         
           if(success){
            console.log("success",success)
            setTimeout(()=>{
                setLoading(false)
                 successModal.onSuccess();
                return   registerModal.onClose();
            },1000)
           }
          
   

        } catch(err){
            console.log(err)
            console.log("Something went wrong")
        }finally{
           
           
         
        }
    },[email,phone,weight,height, firstName,lastName,gender,goal ,registerModal,successModal])
    const onClosed = useCallback(()=>{
        if(!registerModal.isOpen){
            return
        }
        return registerModal.onClose();
    },[registerModal])

    const body = (
<div>
    

        <section className="bg-white relative  dark:bg-gray-900">
        <div className="max-w-2xl px-4  mx-auto ">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Information</h2>
            <div className=" flex flex-row gap-3 ">
                <div className="w-xl">
            <Avatar src={profileImage} width={10} height={10}> </Avatar>
            </div>
            <input
        type="file"

        
        accept="image/*" 
        onChange={(e) => {
          setFile(e.target.files?.[0]);
        }}
      />
     {file && <Button
       onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
             
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res.url);
            if(res){
            setProfileImage(res.url)
            }
                        

          }
        }}
      >
        Upload
      </Button>}

            </div>
            <form action="submit">
                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                    <div className="sm:col-span-1">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={firstName} 
                        onChange={(e)=> setFirstName(e.target.value)} placeholder={data?.firstName} required=""/>
                    </div>
                    <div className="sm:col-span-1">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Last Name</label>
                        <input type="text"  onChange={(e)=> setLastName(e.target.value)} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={lastName} placeholder={data?.lastName} required=""/>
                    </div>
                    <div className="w-full">
                        <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={email} placeholder={data?.email} required=""/>
                    </div>
                    <div className="w-full">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input onChange={(e)=>setPhone(parseInt(e.target.value))} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={phone} placeholder={data?.phone} required=""/>
                    </div>
                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        <select value={gender}  onChange={(e)=>setGender(e.target.value)} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                           
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                         
                        </select>
                    </div>
                    <div>
                        <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
                        <input onChange={(e)=>setWeight(parseInt(e.target.value))} type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={weight} placeholder={data?.weight} required=""/>
                    </div> 
                    <div>
                        <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height (cms)</label>
                        <input onChange={(e)=>setHeight(parseInt(e.target.value))} type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={height} placeholder={data?.height} required=""/>
                    </div> 
                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Goal</label>
                        <select value={goal}  onChange={(e)=>{setGoal(e.target.value)}} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                           
                            <option value="Fat-Loss">Fat Loss</option>
                            <option value="Fitness">Fitness</option>
                            <option value="Muscle Building">Muscle Building</option>
                         
                        </select>
                    </div>
                  
                  
                </div>
              
            </form>
        </div>
      </section>
      </div>
   
)


  return (<AntModal isOpen={registerModal.isOpen} body={body} action="Submit" title="Edit" handleCancel={onClosed} handleSubmit={onSubmit} confirmLoading={loading}></AntModal>
  )
}

export default RegisterModal
