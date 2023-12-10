"use client"

import React, { useCallback } from "react";



export default function Modal({body,title,action,isOpen,onClose,onSubmit,onToggle}) {



const handle = useCallback(()=>{
  if(!isOpen){
    return 
  }

  return onClose();

},[onClose,isOpen]);
   

    if(!isOpen) {
   
    return null 

    }
    
 return  (
              <>
                <div
                  className="justify-center w-full md:w-full   top-10 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none shadow-xl focus:outline-none"
                >
                  <div className="p-2 relative min-w-[50%]   mx-auto md:max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                       {title}
                        </h3>
                        <hr></hr>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            hi
                          </span>
                        </button>
                      </div>
                      <div className="p-2 m-2"> 

                      {body}

                      </div>
                    
                    
                    
                      <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <div className="text-blue-700  cursor-pointer active:text-blue-300  background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={onToggle}>
                         {title==="Login"?"Register":"Login"}
                        </div>
                        <div> 
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                         onClick={()=>handle()}
                        >
                          Close
                        </button>
                        <button
                          className="bg-orange-400 text-white active:bg-orange-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={onSubmit}
                        >
                         {action}
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) 
        
    }

 
