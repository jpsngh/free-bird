

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prisma from '../../../server';






 async function handler (req,res){

const {userId} =  auth();
 


    try {
        
   


    const res = await req.json();
            
    const {trainerId,scheduleEnd,scheduleStart, scheduleDate,author} = res
           
      const addSchedule = await prisma.schedule.create({ 
        data : {
            trainerId,
            scheduleDate,
            scheduleEnd,
            scheduleStart,
         
            

        }

        
   
      })

      if(addSchedule){

     return NextResponse.json(addSchedule)
      }
    
  
     
  return NextResponse.json("Not Admin"); 

     
} catch(err) {
  return NextResponse.json({ error: `Failed because of ${err}` }, { status: 500 }); 
}



}

export {handler as GET,handler as POST}