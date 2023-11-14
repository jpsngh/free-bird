'use client'
import InputComponent from '../ui/InputComponent'
import React, { useCallback,useState } from 'react'
import useLoginModel from '@/hooks/useLoginModal'
import Modal from './Modal'
import useRegisterModel from '@/hooks/useRegisterModal'
import { signIn } from "next-auth/react";

const RegisterModal = ({}) => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const loginModal = useLoginModel()
    const registerModal = useRegisterModel()


    const onToggle = useCallback(()=>{



        if(registerModal.isOpen){
            registerModal.onClose();
            setIsLoading(true);
            
        }

        loginModal.onOpen();
        setIsLoading(false);

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
        if(!registerModal.isOpen){
            return
        }
        return registerModal.onClose();
    },[registerModal])

    const body = (<div className="flex flex-col gap-4">

    <InputComponent placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} disabled={isLoading} type={"name"}></InputComponent>
    <InputComponent placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} disabled={isLoading} type={"email"}></InputComponent>
    <InputComponent placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} disabled={isLoading} type={"password"}></InputComponent>
   
 </div>)
   

  return (<Modal isOpen={registerModal.isOpen} body={body} action="Submit" title="Register" onClose={onClosed} onSubmit={onSubmit} onToggle={onToggle}></Modal>
  )
}

export default RegisterModal
