"use client";

import Image from "next/image";
import Link from "next/link";
import useCart from "@/store/cart";

const ProductCard = ({ title, description, img, id, price }) => {
  const { setCart } = useCart();

  return (
    <article className="bg-gray-100 p-6 rounded-3xl">
      <div className="grid">
        <Link href={`/detailview/${id}`}>
          <Image src={img} alt="Logo" width={300} height={300} className="col-start-1 row-start-1" />
        </Link>
      </div>

      <div className="space-y-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>Pris: {price} €</p>

        <button onClick={() => setCart(id, title, price, img)} className="bg-[#C5A582] px-5 py-1 text-white cursor-pointer hover:opacity-80 ">
          Læg i kurv
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
