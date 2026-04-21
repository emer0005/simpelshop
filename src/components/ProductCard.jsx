"use client";

import Image from "next/image";
import Link from "next/link";
import useCart from "@/store/cart";

const ProductCard = ({ title, description, img, id, price }) => {
  const { setCart } = useCart();

  return (
    <article>
      <div className="grid space-y-">
        {/* <p className="col-start-1 row-start-1 z-10 bg-[#C5A582] text-white w-fit h-fit my-6 px-5">Low in stock</p> */}
        <Link href={`/detailview/${id}`}>
          <Image src={img} alt="Logo" width={300} height={300} className="col-start-1 row-start-1" />
        </Link>
      </div>
      <div className="space-y-3">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p>Pris: {price} €</p>
      <button
        onClick={() => {
          setCart(id, title, price, img);
        }}
        className="bg-[#C5A582] px-5 py-1 mt-2 text-white cursor-pointer"
      >
        Læg i kurv
      </button>
      </div>
    </article>
  );
};

export default ProductCard;
