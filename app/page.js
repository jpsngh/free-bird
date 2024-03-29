
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
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default async function  Home() {
     

     
          return (
<> 
               <BrowserView> 
          <main className="flex min-w-7xl z-10  flex-col items-center justify-between p-5">
          <div className="w-full">
     <Banner> </Banner>
     </div>
     
          <Hero >
          </Hero>  
        
          <div className=" bg-orange-500   md:bg-mobile md:object-scale-down md:h-full w-screen z-0  bg-fixed bg-cover " >
     
               
     
          <div className="bg-white  my-[250px] "> 
          <Framer direction={"x"}>
     <Work className="relative" > </Work>
     </Framer>
     
     </div>
     </div>
     
        
     
     
          <Framer direction={"x"}>
          <Blog> </Blog>
         
     </Framer>
        
     
     
        
          <div className=" bg-blue-800 md:bg-mobilejp object-contain md:h-full md:w-screen bg-fixed bg-canvas" >
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
     <div className="bg-white "> 
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
         </BrowserView>
         <MobileView>
          <div> Hello mobile</div>
         </MobileView>

         </> 
       )
        
      


     
   
}
