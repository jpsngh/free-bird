"use client"
import useLoginModel from "@/hooks/useLoginModal";
import SideMenu from "./SideMenu";
import LoginModal from "./modals/LoginModal";
import useSideMenu from "@/hooks/useSideMenu";
import {  getSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import useRegisterModel from "@/hooks/useRegisterModal";
import { useCallback } from "react";
import Avatar from "./ui/Avatar";
import Link from "next/link";


const Navbar2 = () => {

  const { session} = getSession();
  const loginModal = useLoginModel()
  const registerModal = useRegisterModel()
  const {data:currentUser} = useCurrentUser();

    const {isOpen,onOpen,onClose} = useSideMenu();

    const handleLogin = useCallback(()=>{
      if(loginModal.isOpen){
          return null
      }
      return loginModal.onOpen()

    },[loginModal])
    const handleRegister = useCallback(()=>{
      if(registerModal.isOpen){
          return null
      }
      return registerModal.onOpen()

    },[registerModal])

    const handle = ()=>{
        if(!isOpen){
         return   onOpen();
        }
       return onClose();
    }
    return ( <header className="bg-white shadow-sm shadow-orange-500 p-2">
      {console.log(currentUser)}
    <div
      className=" flex h-16 max-w-screen-xl items-center gap-8 px-2 sm:px-6 lg:px-8"
    >
      <a className="block text-teal-600" href="/">
        <span className="sr-only">Home</span>
        <img src="https://www.freebirdhealthclub.ca/assets/img/logo/freebirdlogo.png" className="w-[100px] h-[60px] p-2" ></img>
      </a>
  
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                About
              </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                Careers
              </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                History
              </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                Services
              </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                Projects
              </a>
            </li>
  
            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
  
        <div className="flex items-center gap-4" >
         {currentUser===undefined ? <div   className="sm:flex sm:gap-4">
            <button onClick={handleLogin}
              className="block rounded-md bg-orange-400 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 cursor-pointer"
              
            >
              Login
            </button>
  
            <button
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-orange-400/75 sm:block"
              href=""
              onClick={handleRegister}
            >
              Register
            </button>
          </div> :<Avatar></Avatar>}
  
          <button
           onClick={handle}  className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
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
  </header> );
}
 
export default Navbar2;