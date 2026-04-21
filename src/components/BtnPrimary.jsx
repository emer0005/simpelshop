"use client"
import useCart from "@/store/cart";

const BtnPrimary = ({ text, id, title, price}) => {
      const {setCart}= useCart();
  return (
  <div>
  <button onClick={() => {setCart(id, title, price);}}>{text}</button>
  </div>
  );
};

export default BtnPrimary;
