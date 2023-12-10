


import React from 'react'
import prisma from "@/server"

  const getTrainer = async (userData,trainerSlug)=>  {

       try {
    const trainer =  await prisma.trainer.findUnique({
        
        where :{
            trainerSlug
        }

    })
   if(!trainer) {
      try{
        const newTrainer = await prisma.trainer.create({

            data :{
                trainerName : userData?.name,
                trainerSlug : userData?.trainerSlug,
                assignedClient : {},
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

const TrainerPortal = async ({userData,trainerSlug}) => {

    const trainer = await getTrainer()


  return (
    <div>


       
    


   
         

    </div>
  )
}

export default TrainerPortal