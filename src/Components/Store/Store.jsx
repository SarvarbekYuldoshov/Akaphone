 import { create } from "zustand";

 const useSharedStore = create ((set)=>({
   cars:[] ,
   setCars: (newCars)=> set({cars:newCars})
 }))

 export default useSharedStore ;