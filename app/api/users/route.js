import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";
import  NextAuth  from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/options'




 async function handler (req){

   

    try{
        const {currentUser} = await serverAuth(req)
    
    return NextResponse.json(currentUser);

    }catch(err){
        console.log(JSON.stringify(err))
        return NextResponse.json({ error: `Failed because of ${error}` }, { status: 500 }); 
    }

}

export {handler as GET}