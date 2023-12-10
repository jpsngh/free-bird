

import { NextResponse } from "next/server";
import { auth,currentUser } from "@clerk/nextjs";
import prisma from '../../../server';






 async function handler (req,res){

const {userId} =  auth();
 


    try {
        if(userId!==null)
        {
   const user = await prisma.user.findUnique({
    where:{
        clerkId : userId,
    }

   })




   if(user.isTrainer)
   {

    const res = await req.json();
    const {dietId} = res

           
      const allUser = await prisma.diet.delete({
        
        where :{
            id : dietId
        },
        
     
      })

     return NextResponse.json(allUser)
   
    }
  } 
     
  return NextResponse.json("Not Trainer"); 

     
} catch(err) {
  return NextResponse.json({ error: `Failed because of ${err}` }, { status: 500 }); 
}



}

export {handler as POST}