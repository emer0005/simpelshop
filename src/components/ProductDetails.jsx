"use client";
import Image from "next/image";
import QuantityPicker from "./QuantityPicker";
import useCart from "@/store/cart";

const ProductDetails = ({ img, title, description, id, price }) => {
  const { setCart } = useCart();
  return (
    <section className="grid grid-cols-2 gap-6 max-w-[70rem] mx-auto mt-[2rem]">
      <div className="rounded-2xl overflow-hidden">
        <Image src={img} alt="Produkt billede" className="w-full h-full object-cover" width={500} height={500} />
      </div>
      <div className="space-y-8 flex flex-col justify-center">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p>{description}</p>
        <div className="flex gap-2">
          <QuantityPicker />
          <button
            onClick={() => {
              setCart(id, title, price, img);
            }}
            className="bg-[#C5A582] px-5 py-1 mt-2 text-white cursor-pointer hover:opacity-80"
          >
            Læg i kurv
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
