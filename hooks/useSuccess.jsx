import { create } from "zustand";

const useSuccess = create((set)=>({
isSuccess : false,
onSuccess : ()=> set({ isSuccess: true}),
onFailure : ()=> set({ isSuccess: false}),
}));
export default useSuccess