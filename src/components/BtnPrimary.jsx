"use client"
import useCart from "@/store/cart";

const BtnPrimary = ({ text, id, title, price}) => {
      const {setCart}= useCart();
  return (
  <div>
  <button onClick={() => {setCart(id, title, price);}} className="bg-red-200 px-4 py-1 cursor-pointer">{text}</button>
  </div>
  );
};

export default BtnPrimary;
