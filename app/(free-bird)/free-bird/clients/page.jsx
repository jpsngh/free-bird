"use client"

import React,{useState,useEffect, useCallback} from 'react'
import useAllUser from '@/hooks/useAllUsers'
import Loading from '@/app/loading'
import Table from './Table'
import axios from "axios"

const Page = () => {
 
  const {data,isLoading} = useAllUser()
 

  const [queryData,setQueryData] = useState()
  const [input,setInput] = useState("All Categories")
  const [userData,setUserData] = useState();

  useEffect(()=>{
    if(data){
      setUserData(data);
    }
  },[data,setUserData]);

 

 const handleClick=useCallback(async(e)=>{
  e.preventDefault();

  const findData=(item)=>{
    console.log(input,queryData , typeof(input),typeof(queryData))

      // let r = `/${queryData}/i`
      let r = new RegExp(queryData, 'i')
    if(r.test(item[input])){
      return item
    }
    else return false
  }

  const newData = data.filter(findData
  )

    setUserData(newData);

 },[setUserData,queryData,input,data]);
 console.log(userData)

  if(isLoading){
    return <Loading ></Loading>
  }


  return (
    <div className='flex flex-col items-center justify-center m-2 p-2 gap-5'>
  {userData?"yay":"  nahh"}
  <div>
    <h2 className="text-lg text-blue-800 ">Client Data</h2>
  </div>

<form >
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
     
        <select id="dropdown" value={input} onChange={(e)=>setInput(e.target.value)} class={`z-10  p-2 mx-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
             

            
                <option type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" value="firstName">Name</option>
           
                <option type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" value={"email"} >Email</option>
            
                <option type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"value={"id"} >UserId</option>
            
                <option type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" value={"phone"}>Phone</option>
            
        </select>
        <div class=" relative w-full">
            <input type="search" onChange={(e)=>setQueryData(e.target.value)} id="search-dropdown" value={queryData} class="block   p-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-3 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
            placeholder={`Search by ${input}`} required/>
            <button type="submit" onClick={(e)=>handleClick(e)} class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

      
  
       <Table userData={userData}/>
      
    </div>
  )
}

export default Page
