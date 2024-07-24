 import { create } from "zustand";

 const useSharedStore = create ((set)=>({
   // count: 0,
   // setCount: (newCount)=> set({count:newCount})
   cars:[] ,
   setCars: (newCars)=> set({cars:newCars})
 }))

 export default useSharedStore ;