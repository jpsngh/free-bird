
//import useUser from '@/hooks/useUser'
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Avatar =({
    userId,isLarge,hasBorder
})=>{

    const router = useRouter()
    //const {data : fetchedUser} =  useUser(userId);
    const onClick = useCallback((event)=>{
        event.stopPropagation();
        const url = `/users/${userId}`
        router.push(url)
        
    },[router,userId])
return (
    <div className={`${hasBorder?'border-4 bor0der-black':"" }
    ${isLarge ? 'h-32' : 'h-12 '}
    ${isLarge?'w-32 ':'w-12'}
    rounded-full
    hover:opacity-90
    transition
    cursor-pointer
    relative
     
    `}>

        <Image fill style={{objectFit:'cover',borderRadius:'100%'}} alt = "Avatar" onClick={onClick} src={'/images/avatar.jpeg'}></Image>
 

    </div>
)
}


export default Avatar