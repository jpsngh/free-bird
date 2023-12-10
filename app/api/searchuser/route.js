
import serverAuth from "@/lib/serverAuth";
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




   if(user.isAdmin)
   {
     const res = await req.json();
     const {userId} = res

           
      const allUser = await prisma.user.findUnique({
        
     where : {
        
            id : userId
        
    
    }
     
     
    })

     return NextResponse.json(allUser)
   
    }
  } 
     
  return NextResponse.json("Not Admin"); 

     
} catch(err) {
  return NextResponse.json({ error: `Failed because of ${err}` }, { status: 500 }); 
}



}

export {handler as GET}