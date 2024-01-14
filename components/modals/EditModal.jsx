'use client'

import React, { useCallback,useState } from 'react'
import AntModal from './AntModal'

import {FaArrowLeft } from 'react-icons/fa';
import {Switch,Alert,Button,Select,Space} from 'antd'
import useSuccess from '@/hooks/useSuccess'
import useAllTrainers from '@/hooks/useAllTrainers';


import axios from 'axios'

const EditModal = ({open,data,setOpen,api}) => {
    const successModal = useSuccess()
    const {data:trainer,isLoading:trainerLoading} = useAllTrainers()


    const [firstName,setFirstName] = useState(data?.firstName)
    const [lastName,setLastName] = useState(data?.lastName)
    const [email,setEmail] = useState(data?.email);
    const [phone,setPhone] = useState(data?.phone);
    const [gender,setGender] = useState(data?.gender);
    const [height,setHeight] = useState(data?.height);
    const [weight,setWeight] = useState(data?.weight);
    const [goal,setGoal] = useState(data?.goal);
    const [paid,setPaid] = useState(data?.paid)
    const [loading,setIsLoading] = useState(false);
    const [innerEdit,setInnerEdit] = useState(false)
    const [isAdmin,setIsAdmin] = useState(data?.isAdmin)
    const [isTrainer,setIsTrainer] = useState(data?.isTrainer)
    const [trainerSlug,setTrainerSlug] = useState(data?.trainerSlug)
    const [assignedTrainer,setAssignTrainer] = useState(data?.assignedTrainer)

   
  
   
     console.log("ass",assignedTrainer)

    const handleChange = useCallback((e)=>
    {

      setAssignTrainer(e.target.value || null)
      console.log("value",e.target.value)
 
    },[setAssignTrainer] )


  


    const onSubmit = useCallback(async()=>{

    
   
            try
         {
         
            const success =    await axios.post('/api/updatebyadmin',{
                userId:data?.id,
                email,
                phone : parseInt(phone),
                firstName,
                lastName,
                height:parseInt(height),
                weight:parseInt(weight),
                goal,
                gender,
                paid,
                isAdmin,
                isTrainer,
                trainerSlug,
                assignedTrainer



                
            })
            
        if(success) {
            api.open({
                message: 'Success',
                description:
                  'User Data has been updated',
                duration: 5,
              });

           console.log("success")
           setIsLoading(true)
        setTimeout(()=>{

         setIsLoading(false)
         successModal.onSuccess();
         return  setOpen(false)
   

        },2000)
            };
        
          
        

             

         }catch(err){
            api.open({
                message: 'Oops',
                description:
                  `Something went Wrong ${err.message}`,
                duration: 0,
              });

            

         }

        


        },[setOpen,api,email,
            phone,
            assignedTrainer,
            firstName,
            lastName,
            height,
            weight,
            goal,
            gender,
            paid,
            isAdmin,
            isTrainer,data?.id,successModal,trainerSlug] )

    const onClose = useCallback(()=>{
        if(!open){
            return
        }
        return setOpen(false);
    },[open,setOpen])

    const body = (

        
            <div> 

{  innerEdit ? <div>
   <div>

   {<button onClick={()=>{setInnerEdit(false)}} className='m-2 p-2' > <FaArrowLeft></FaArrowLeft></button>}
   <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Advanced Admin Options</h2>

     
        <div className='flex flex-col gap-5'>
        <div className='flex flex-row gap-2' >

              <label className="text-lg"> Paid Member :  </label>
              <Switch onChange={(checked)=>{setPaid(checked)}}   defaultChecked={data?.paid} ></Switch>
            </div>
            <div className='flex flex-row gap-2' >

              <label className="text-lg"> Assign Trainer  :  </label>
              <select value={assignedTrainer} placeholder="Select Trainer"
               onChange={handleChange}  id="category" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              >

                {trainer?.map((train)=>{
                    <option value={null}> "Select a trainer" </option>
                 return    <option value={train} key={train.id} > {`${train?.trainerName}  & ${train.trainerSlug}`}   </option>
                })} 
                
                 </select>
            </div>

            <h2 > <Alert
      message="Warning"
      description="Please be cautious while granting Admin and Trainer access as it may expose data to non employee"
      type="warning"
    /> </h2>

            <div className='flex flex-row gap-2' >
              <label className="text-lg"> Admin :  </label>
              <Switch onChange={(checked)=>{
               
                setIsAdmin(checked)}}   defaultChecked={data?.isAdmin} ></Switch>
            </div>
            <div className='flex flex-row gap-2' >
              <label className="text-lg"> Trainer :  </label>
              <Switch onChange={(checked)=>{setIsTrainer(checked)}}   defaultChecked={data?.isTrainer} ></Switch>
            </div>
            <div className={`${isTrainer?"block":"hidden"} flex flex-row gap-2`} >
              <label className="text-lg"> Trainer Slug :  </label>
              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={trainerSlug} 
                        onChange={(e)=> setTrainerSlug(e.target.value)} placeholder={data?.trainerSlug} required=""/>
            </div>
           
           
           
        </div>
   
   </div>
     
</div> 
         :<section className="bg-white relative  dark:bg-gray-900">
        <div className="max-w-2xl px-4  mx-auto ">

            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Information</h2>
            <form action="submit">
                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                    <div className="sm:col-span-1">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={firstName} 
                        onChange={(e)=> setFirstName(e.target.value)} placeholder={"h"} required=""/>
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
                        <input  onChange={(e)=>setPhone(e.target.value)} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={phone} placeholder={data?.phone} required=""/>
                    </div>
                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        <select  onChange={(e)=>setGender(e.target.value)} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                           
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                         
                        </select>
                    </div>
                    <div>
                        <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
                        <input onChange={(e)=>setWeight(e.target.value)} type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={weight} placeholder={"hh"} required=""/>
                    </div> 
                    <div>
                        <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height (cms)</label>
                        <input onChange={(e)=>setHeight(e.target.value)} type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={height} placeholder={""} required=""/>
                    </div> 
                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Goal</label>
                        <select  onChange={(e)=>{setGoal(e.target.value)}} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                           
                            <option value="Fat-Loss">Fat Loss</option>
                            <option value="Fitness">Fitness</option>
                            <option value="Muscle Building">Muscle Building</option>
                         
                        </select>
                    </div>
                  
                  
                </div>
              
            </form>
        </div>
        <Button onClick={(e)=>{setInnerEdit(true)}}
       >
        Advanced Options
       </Button>
      </section> }
      </div>
   
)




  return (<AntModal isOpen={open} body={body} okText="Submit"  title="Edit" handleCancel={onClose} handleSubmit={onSubmit} confirmLoading={loading} ></AntModal>
  )
}

export default EditModal
