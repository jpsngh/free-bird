
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
        const url = `/profile`
        router.push(url)
        
    },[router])
return (
    <div className={`${hasBorder?'border-4 bor0der-black':"" }
    ${isLarge ? 'h-32' : 'h-12 '}
    ${isLarge?'w-32 ':'w-12'}
    rounded-full
    hover:opacity-90
    transition
    absolute
    right-5
    cursor-pointer
    mx-10

     
    `}>

        <Image width={100} height={100} style={{objectFit:'cover',borderRadius:'100%'}} alt = "Avatar" onClick={onClick} src={'/images/avatar.jpeg'}></Image>
 

    </div>
)
}


export default Avatar