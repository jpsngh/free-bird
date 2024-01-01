'use client'

import useSideMenu from "../hooks/useSideMenu";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link"
import useCurrentUser from "@/hooks/useCurrentUser";

const SideMenu = () => {
    const {isOpen,onOpen,onClose} = useSideMenu();

    const {data:currentUser} = useCurrentUser();
    if(isOpen) {

    return ( <div  className=" md:hidden flex h-fit flex-col justify-between border-b-2 border-b-orange-500 bg-white">
    <div onClick={()=>{onClose()}}
     className="px-4 py-6">
   
  
      <ul className="mt-6 space-y-1">
        <li>
          <Link
            href="/profile"
            prefetch={false}
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
           Profile
          </Link>
        </li>
  
      
  
          
              <li>
                <Link
                   href={currentUser?.isTrainer ? {
                    pathname:"/trainer",
                    query:{
                      trainerSlug: currentUser.trainerSlug,
                      userData : currentUser.firstName 
                    }
                  }:`/transformations` }
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  {currentUser?.isTrainer?"Trainer":"Transformations"}
                </Link>
              </li>
  
              <li>
                <Link
                  href="/blog"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Blog
                </Link>
              </li>
           
      
  
        <li>
          <Link
            href=""
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            About Us
            
          </Link>
        </li>
  
        <li>
          <Link
          
            href={currentUser?.isAdmin ? "/free-bird":"/author"}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            {currentUser?.isAdmin ? "Admin":"Team"}
          </Link>
        </li>
  
       
  
           
              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Details
                </a>
              </li>
  
              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Security
                </a>
              </li>
  
              <li>
                <form action="/logout">
                  <button
                    type="submit"
                    className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                  >
                    <SignedOut></SignedOut>
                  </button>
                </form>
              </li>
            </ul>
          
     
    </div>
  
   
  </div> )}

  else return ""
}

 
export default SideMenu;