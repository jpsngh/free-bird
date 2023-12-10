"use server"
import { auth,currentUser } from "@clerk/nextjs";
 import prisma from "@/server"



const  bmrServer = async (data) => {

  const {userId} = auth()
  try {
  if(userId) {
   const user=  prisma.user.update({
        where:{
            clerkId:userId,
        },
        data:{
        bmr:data
        }
    }).then(result => result)
    if(result) {
        console.log("bmr success ,",user)
    }
  }
  else {
    console.log("Not signed In")
  }
}
catch(err) {
    console.log("bmr error: " + err)
}


}

export default bmrServer
