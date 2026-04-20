import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCart = create(
persist ((set, get) => ({
  cart: [], 
  setCart: (id, title) => set((state)=>({
    cart:[...state.cart,{id:id, title:title}],

  })),

  removeCart: (id)=> set((state) => ({
    cart: get().cart.filter((cartProduct)=> cartProduct.id !== id)
  })),
})));

export default useCart