
import Hero from "@/components/Hero"
import Trusted from "@/components/Trusted"
import Work from "@/components/Work"
import Blog from "@/components/Blog"

import Testament from "@/components/ui/Testament"
import Locations from "@/components/Locations"
import Team from "@/components/Team"
import Framer from '@/lib/framer';

export default function Home() {

  return (
  
    <main className="flex min-w-7xl flex-col items-center justify-between p-5">
     
     <Hero>
     </Hero>  
     
     <div className="bg-mobile h-full w-screen bg-fixed " >
       <h2> Hi </h2>
     <div className="bg-white my-[250px]"> 
     <Framer direction={"x"}>
<Work> </Work>
</Framer>

</div>
<div> 
<Framer direction={"y"}>
  
<Blog></Blog>
</Framer>
</div>


     </div>

   

     <div className="bg-mobilejp md:h-full md:w-screen bg-fixed bg-canvas" >

<div className="bg-white my-[250px] ">
<Framer direction={"z"}>
<Testament></Testament>
</Framer>
<Locations></Locations>


</div>
<div className="bg-white my-[250px] ">
<Framer direction={"x"}>
<Trusted>
</Trusted>
</Framer>
<Framer direction={"y"}>
<Team></Team>
</Framer>

</div>

      </div>
   
 

 
    </main>
 
  )
}
