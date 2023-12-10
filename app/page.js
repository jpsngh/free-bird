
import Hero from "@/components/Hero"
import Trusted from "@/components/Trusted"
import Work from "@/components/Work"
import Blog from "@/components/Blog"

import Testament from "@/components/ui/Testament"
import Locations from "@/components/Locations"
import Team from "@/components/Team"


export default function Home() {

  return (
    <main className="flex min-w-7xl flex-col items-center justify-between p-5">
     <Hero>
     </Hero>    
     <div className="bg-mobile h-full w-screen bg-fixed " >

     <div className="bg-white my-[250px]"> 
<Work> </Work>
</div>

<Blog></Blog>


     </div>

   

     <div className="bg-mobilejp h-full w-screen bg-fixed bg-canvas" >

<div className="bg-white my-[250px] ">

<Testament></Testament>
<Locations></Locations>

</div>
<div className="bg-white my-[250px] ">

<Trusted></Trusted>
<Team></Team>

</div>

      </div>
   
 


    </main>
  )
}
