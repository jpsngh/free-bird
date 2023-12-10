
 import { headers } from "next/headers"
import axios  from "axios"

import prisma from '@/server'
import ClientPage from "./ClientPage"


const getData = async(userId) =>{
  try {
  const allUser = await prisma.user.findUnique({
        
    where : {
       
           id : userId
       
   
   }
    

})
if(allUser) {
  return allUser
}
  }
  catch(err){
    console.log(err)
  }
}

 
const Page = async({searchParams}) => {

  const {userId} = searchParams

const data = await getData(userId)



   
    
  return (

    <ClientPage data={data}></ClientPage>
   
  )
}

export default Page
