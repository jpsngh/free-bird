
import { NextResponse } from "next/server";
import { auth,currentUser } from "@clerk/nextjs";
import prisma from '../../../server';





 async function handler (req){

const {userId} =  auth();

 console.log(userId);
    try{


      

        if(userId!==null)
        {
            const res = await req.json();
            const {email,
                name,
                firstName,
                lastName,
                phone,
                gender,
                weight,
                height,
                goal,
            } =  res
   const user = await prisma.user.update({
    where:{
        clerkId : userId,
    },data : res

   })
  

   if(user){
   return NextResponse.json(user)
   }
}

   
return NextResponse.json({"error":"Not Authorized"})
   
   

    
}
     

catch(err){
        console.log(JSON.stringify(err))
        return NextResponse.json({ error: `Failed because of ${err}` }, { status: 500 }); 
    }


}

export {handler as GET,handler as POST}