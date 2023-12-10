
import { NextResponse } from "next/server";
import { auth,currentUser } from "@clerk/nextjs";
import prisma from '../../../server';





 async function handler (req){




    try{


      

  
        {
            const res = await req.json();
            const {
                userId,
                scheduleId,
                dietId,
                trainerNote
                
            } =  res
            console.log(res);
            let newRes = {...res};
            delete newRes.userId

            console.log(newRes)
   const user = await prisma.user.update({
    where:{
        id : userId,
    },data :  newRes
   })
    


   if(user){
    console.log("updateby trainer",user)
   return NextResponse.json(user)
   }
}
  
console.log("not successfull")
   
return NextResponse.json({"error":"Not Authorized"})
   
   

    
}
     

catch(err){
        console.log(JSON.stringify(err))
        return NextResponse.json({ error: `Failed because of ${err}` }, { status: 500 }); 
    }


}

export {handler as GET,handler as POST}