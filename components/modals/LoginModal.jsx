'use client'
import InputComponent from '../ui/InputComponent'
import React, { useCallback,useState } from 'react'
import useLoginModel from '@/hooks/useLoginModal'
import Modal from './Modal'
 import { SignInButton } from "@clerk/nextjs";
import { signIn } from "next-auth/react";
import useRegisterModel from '@/hooks/useRegisterModal'

const LoginModal = ({}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const loginModal = useLoginModel()
    const registerModal = useRegisterModel()

    const onToggle = useCallback(()=>{



        if(loginModal.isOpen){
            loginModal.onClose();
        }

        registerModal.onOpen();
   

    },[loginModal,registerModal])

    const onSubmit = useCallback(async()=>{
        try{
            setIsLoading(true)
            // todo login
            await signIn('credentials',
            {email,password})
            loginModal.onClose();
        } catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)
        }
    },[loginModal,email,password])
    const onClosed = useCallback(()=>{
        if(!loginModal.isOpen){
            return
        }
        return loginModal.onClose();
    },[loginModal])

    const body = (<SignInButton mode="modal"></SignInButton>)
   

  return (<Modal isOpen={loginModal.isOpen} body={body} action="Submit" title="Login" onClose={onClosed} onSubmit={onSubmit} onToggle={onToggle}></Modal>
  )
}

export default LoginModal
