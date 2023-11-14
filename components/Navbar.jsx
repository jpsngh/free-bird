
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import Link from "next/link";
  



  
const Navbar = () => {
    return (
        <div className=" shadow-md  min-w-7xl font-medium text-xl h-[80px] bg-white  shadow-orange-300  w-full flex flex-row justify-between items-center p-5">
<div>
   <img src="https://www.freebirdhealthclub.ca/assets/img/logo/freebirdlogo.png" className="w-[100px] h-[60px] p-2" ></img>
</div >  
<div className=" flex md:hidden  flex-wrap p-2  ">  
<Menubar className="hover:opacity-50 bg-black text-white">
  <MenubarMenu>
    <MenubarTrigger>Menu</MenubarTrigger>
    <MenubarContent className="bg-white">
      <MenubarItem>
        About us <MenubarShortcut> $ </MenubarShortcut>
      </MenubarItem>
      <MenubarItem>Services</MenubarItem>
      <MenubarSeparator />
      <hr></hr>
      <MenubarItem >Memberships</MenubarItem>
      <MenubarItem >Pricing</MenubarItem>
      <MenubarSeparator />
      <hr></hr>
      <MenubarItem>Gallery</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>






</div>
<div className="md:flex flex-grow flex-row hidden gap-5 text-blue-900 p-5 mx-20  " >

<div className=" hover:text-orange-500  p-2  ">
<Link href={"/"}>
     <p className="" >Home</p>
    </Link>
    </div>  
    <div className=" hover:text-orange-500  p-2  ">
<Link href={"/"}>
    Services
    </Link>
    </div>  
    <div className="  hover:text-orange-500 p-2  ">
<Link href={"/"}>
   Trainers
    </Link>
    </div>  
    <div className="  hover:text-orange-500 p-2  ">
<Link href={"/"}>
   Community+
    </Link>
    </div>  
      

  

</div>
<div className=" md:flex hidden">  
<Menubar className="hover:opacity-50 font-semibold  bg-orange-400 text-white">
  <MenubarMenu>
    <MenubarTrigger className="md:text-sm lg:text-lg text-lg" >Sign in</MenubarTrigger>
    <MenubarContent className="bg-white">
      <MenubarItem>
        About us <MenubarShortcut> $ </MenubarShortcut>
      </MenubarItem>
      <MenubarItem>Services</MenubarItem>
      <MenubarSeparator />
      <hr></hr>
      <MenubarItem >Memberships</MenubarItem>
      <MenubarItem >Pricing</MenubarItem>
      <MenubarSeparator />
      <hr></hr>
      <MenubarItem>Gallery</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>






</div>

        </div>
      );
}
 
export default Navbar;