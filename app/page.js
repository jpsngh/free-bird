
import Hero from "@/components/Hero"
import Trusted from "@/components/Trusted"
import Work from "@/components/Work"
import Blog from "@/components/Blog"
import Reviews from "@/components/Reviews"
import Testament from "@/components/ui/Testament"
import Locations from "@/components/ui/Locations"
import Team from "@/components/Team"
import Cta from "@/components/ui/Cta"
import Framer from '@/lib/framer';
import Transformations from "@/components/Transformations"
import Banner from "@/components/Banner"

export default async function  Home() {

  return (
  
    <main className="flex min-w-7xl flex-col items-center justify-between p-5">
     <div className="w-full">
<Banner> </Banner>
</div>

     <Hero>
     </Hero>  
  
     <div className=" bg-landscapeBg  md:bg-mobile md:object-scale-down h-full w-screen bg-fixed " >

     <div className="bg-white my-[250px] "> 
     <Framer direction={"x"}>
<Work> </Work>
</Framer>

</div>


     </div>


     <Framer direction={"x"}>
     <Blog> </Blog>
    
</Framer>
   


   
     <div className=" bg-landscapeBg2  md:bg-mobilejp object-contain md:h-full md:w-screen bg-fixed bg-canvas" >
      <div className=" md:hidden   "> 
     <Cta className=" md:hidden   " slug="home" > </Cta>
     </div>
<div className="bg-white my-[250px] ">
<Framer direction={"x"}>

<div className=" "> 
<Locations></Locations>
</div>


</Framer>





</div>
<div className="bg-white p-5"> 
<Reviews/>
</div>



<div className="bg-white my-[250px] ">
<Framer direction={"x"}>
<Trusted>
</Trusted>
</Framer>
<Framer direction={"x"}>
<Team></Team>
</Framer>

</div>
<div className="bg-white" >
<Transformations> </Transformations>
</div>
      </div>
   
 

 
    </main>
 
  )
}
