"use client"
import useLoginModel from "../hooks/useLoginModal"
import SideMenu from "./SideMenu";
import LoginModal from "./modals/LoginModal";
import useSideMenu from "hooks/useSideMenu";
import { SignInButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from 'next/navigation'

import useCurrentUser from "@/hooks/useCurrentUser";
import useRegisterModel from "@/hooks/useRegisterModal";
import { useCallback,useState,useRef } from "react";
import Avatar from "./ui/Avatar";
import Link from "next/link";



const Navbar2 = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();
 
  const loginModal = useLoginModel()
  const registerModal = useRegisterModel()
  const {data:currentUser} = useCurrentUser();
  const ref = usePathname();
 
    const {isOpen,onOpen,onClose} = useSideMenu();


    const handle = ()=>{
        if(!isOpen){
         return   onOpen();
        }
       return onClose();
    }
    return ( <div    
    className="navbar bg-white   shadow-sm shadow-orange-500 p-2">
      
    <div
      className=" flex h-16 max-w-screen-xl items-center gap-8 px-2 sm:px-6 lg:px-8"
    >
      <Link className="block text-teal-600 " href="/">
        <span className="sr-only">Home</span>
        <img src="https://marketplace.canva.com/EAFonLhGegw/1/0/1600w/canva-fitness-badge.-sport-logo.-ncDS_d4Gbgc.jpg" className="w-[150px] h-[90px] p-2" ></img>
      </Link>
  
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-md">
            {console.log(ref)}
            <li>
              <Link  className={` ${ref==="/history"?"text-blue-800":"text-gray-500"} relative after:bg-gray-500 after:top-5 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer   transition hover:text-blue-800`} href="/history">
                About
              </Link>
            </li>
  
            <li>
              <Link className={` ${ref==="/careers"?"text-blue-800":"text-gray-500"} relative after:bg-blue-800 after:top-5 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition hover:text-blue-800`} href="/careers">
                Careers
              </Link>
            </li>
  
            <li>
              <Link className={` ${ref==="/transformations"?"text-blue-800":"text-gray-500 "}  transition hover:text-blue-800`} href="/transformations">
                Transformations
              </Link>
            </li>
  
            <li>
              <Link className={` ${ref==="/trainer"?"text-blue-800":" text-gray-500"}  transition hover:text-blue-800`} href={currentUser?.isTrainer ? {
                pathname:"/trainer",
                query:{
                  trainerSlug: currentUser.trainerSlug,
                  userData : currentUser.firstName 
                }
              }:`/bmr` }>
                {currentUser?.isTrainer?"Trainer":"Bmr"}
              </Link>
            </li>
  
            <li>
              <Link className={` ${ref==="/admin"?"text-blue-800":"text-gray-500"} relative after:bg-blue-800 after:top-5 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition hover:text-blue-800`} href={currentUser?.isAdmin ? `/free-bird`:`/author` }>
              {currentUser?.isAdmin? "Admin ":"Team"}  
              </Link>
            </li>
  
            <li>
              <Link className={` ${ref==="/blog"?"text-blue-800":"text-gray-500"} relative after:bg-blue-800 after:top-5 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition hover:text-blue-800`} href="/blog">
                Blog
              </Link>
            </li>

              <li>
              <Link  className={`hidden ${ref==="/blog"?"text-blue-800":"text-gray-500"} md:block text-gray-500 transition hover:text-blue-800 text-md `} href={"/profile"} >
          Profile
          </Link>
                </li>


          </ul>
        </nav>
  
        <div className="flex items-center gap-4 right-3 absolute " >
         {!isSignedIn  ? <div   className="sm:flex sm:gap-4">
          <SignInButton mode="modal"> 
            <button 
              className="block rounded-md bg-orange-400 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 cursor-pointer"
              
            >
              Login
            </button>
            </SignInButton>
            <SignUpButton mode="modal">
            <button
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-orange-400/75 sm:block"
              href=""
              
            >
              Register
            </button>
            </SignUpButton>
          </div> : 
          <div className="flex flex-row gap-2 items-center justify-center"> 
          <UserButton></UserButton> 
         
          
           </div>}
  
          <button
           onClick={handle}  className="block rounded bg-gray-100 p-2.5 text-gray-500 transition hover:text-blue-800 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div> );
}
 
export default Navbar2;