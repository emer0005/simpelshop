"use client";
import { IoPerson } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import Link from "next/link";
import useCart from "@/store/cart";

const Icon = () => {
  const { cart } = useCart();
  return (
    <div className="flex gap-2">
      <IoPerson className="text-[#C5A582] text-4xl" />
      <IoMdHeart className="text-[#C5A582] text-4xl" />
      <div className="grid">
        <Link className="col-start-1 row-start-1" href="/payment">
          <IoCart className="text-[#C5A582] text-4xl" />
        </Link>
        <span className="col-start-1 row-start-1 justify-self-end w-4 h-4 rounded-full bg-red-200 text-xs text-center">{cart.length}</span>
      </div>
    </div>
  );
};

export default Icon;
