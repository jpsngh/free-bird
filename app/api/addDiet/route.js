

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prisma from '../../../server';






 async function handler (req,res){

const {userId} =  auth();
 


    try {
        
   


    const res = await req.json();
            
    const {trainerId,dietTitle,dietUrl} = res
           
      const addDiet = await prisma.diet.create({ 
        data : {
            trainerId,
            dietTitle,
            dietUrl,
            user : {}
            
         
            

        }

        
   
      })

      if(addDiet){

     return NextResponse.json(addDiet)
      }
    
  
     
  return NextResponse.json("Not Admin"); 

     
} catch(err) {
  return NextResponse.json({ error: `Failed because of ${err}` }, { status: 500 }); 
}



}

export {handler as GET,handler as POST}