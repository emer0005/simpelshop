import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCart = create(
  persist((set, get) => ({
    cart: [],
    setCart: (id, title, price, img) =>
      set((state) => ({
        cart: [...state.cart, { id: id, title: title, price: price, img: img }],
      })),

    removeCart: (id) =>
      set((state) => ({
        cart: get().cart.filter((cartProduct) => cartProduct.id !== id),
      })),
  }))
);

export default useCart;
