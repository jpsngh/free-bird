


import React from 'react'
import prisma from "@/server"

import Dashboard from './Dashboard'

import { getAuthor } from '@/sanity/lib/utils'
  const getTrainer = async (userData,trainerSlug)=>  {



       try {
    const trainer =  await prisma.trainer.findFirst({
        
        where :{
            trainerSlug
        },
        include : {
          assignedClient : {
            include: {
              schedule:true,
              diet:true
            }
           

          },
          schedule : {
            include :{
              user : true
            }
            
          },
          diet : {
            include :{
              user : true
            }
         
          }
        }
       
    })
   if(!trainer) {
      try{
        const newTrainer = await prisma.trainer.create({

            data :{
                trainerName : userData,
                trainerSlug : trainerSlug,
                assignedClient : {},
                trainerProfileUrl:author.image,
                diet :{}
            }
    
    
    
    
         })

    

         return newTrainer
      }
      catch(err){

        console.log(err)

      }
    



   }

   if(trainer) {

    return trainer
   }

}
catch(err) {
    console.log(err)
}
  

  }

const page = async ({searchParams}) => {
    const {userData,trainerSlug} = searchParams
   

    const author = await getAuthor(trainerSlug);

    const trainer = await getTrainer(userData,trainerSlug,author )

    console.log("trainer",trainer)
  


 console.log(trainer.assignedClient)
  return (
    <div className=" m-[10px] border rounded-sm shadow-md ">

 
 <Dashboard trainer={trainer} author={author} ></Dashboard>
         

         


   
         

    </div>
  )
}

export default page