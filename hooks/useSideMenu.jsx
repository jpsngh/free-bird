import {create} from "zustand"



const useSideMenu = create((set)=>({
    isOpen: false,
    onOpen : () => set({isOpen: true}),
    onClose : ()=> set({isOpen: false})


}))

export default useSideMenu