import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="flex justify-center gap-2 items-center m-5  ">
     <h2 classname = " hidden  md:block text-3xl m-2 text-blue-800 p-2"> Welcome to Free Bird Health Club </h2>
    <SignIn />
  </div>
  )

 

}