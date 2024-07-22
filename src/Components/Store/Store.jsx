 import { create } from "zustand";

 const useSharedStore = create ((set)=>{
    cards: []
    setCards: (cards)=>set({cards})
 })
 export default useSharedStore