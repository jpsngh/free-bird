
import { NextResponse } from "next/server";
import { auth,currentUser } from "@clerk/nextjs";
import prisma from '../../../server';





 async function handler (req,res){

const {userId} =  auth();




    try{
        if(userId!==null)
        {
   const user = await prisma.user.findUnique({
    where:{
        clerkId : userId,
    },
    include:{
        assignedTrainer:true,
        diet : true,
        schedule:true,
        
    }

   })

     console.log("user",user)
  

   if(!user){

    const  newUser = await currentUser();
   

    const data = await prisma.user.create({ data: {
       clerkId:userId,
       name :  newUser.fullName,
       firstName: newUser.firstName,
       lastName: newUser.lastName,
       imageUrl: newUser.imageUrl,
       gender:newUser.birthday,
       email : newUser.emailAddresses[0].emailAddress,
       joinedAt : Date.now(),
       phone : newUser.phoneNumbers[0].phoneNumber,
       createdAt : newUser.createdAt
      


       
       


    } })

     return NextResponse.json(data)
   
   }
   return NextResponse.json(user)
    
    }
     else{
        return NextResponse.json("Not Signed In"); 
     }
}
catch(err){
        console.log(JSON.stringify(err))
        return NextResponse.json({ error: `Failed because of ${err}` }, { status: 500 }); 
    }


}

export {handler as GET,handler as POST}