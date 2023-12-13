"use client"

import React,{useEffect,useRef} from 'react'
import {motion,useInView,useAnimation} from "framer-motion"

const Framer = ({children,x,direction,color}) => {
 
    const ref=useRef(null);
    const inView=useInView(ref,{once:true})
     const control = useAnimation() 
     const Scontrol = useAnimation() 

    useEffect(()=>{
        if(inView){
            console.log(inView);
       control.start("visible")
       Scontrol.start("visible")
        }

    },[Scontrol, control, inView])

  return (
    <div ref={ref} style={{position:"relative", overflow:"hidden"}}> 

   <motion.div
    variants={{
        hidden:{opacity:0,direction:75},
        visible:{opacity:1,direction:0}

    }}
    initial="hidden"
    animate={control}
    transition={{duration:0.5,delay:0.35}}
>
    {children}

   </motion.div>
   {x===2?<motion.div
    variants={{
        hidden:{left:0},
        visible:{left:"100%"}

    }}
    initial="hidden"
    animate={Scontrol}
    transition={{duration:0.7,ease:"easeIn"}}

    style={{
        position:"absolute",
        top:4,
        bottom:4,
        left:0,
        right:0,
        opacity:0.7,
        background:`${color}`,
        zIndex:20    }} 
/>:""
}



    </div>
  )
}

export default Framer