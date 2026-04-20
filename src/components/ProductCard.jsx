"use client";

import Image from "next/image";
import Link from "next/link";
import useCart from "@/store/cart";

const ProductCard = ({ title, description, img, id, price }) => {
  const { setCart } = useCart();

  return (
    <article>
      <div className="grid">
        <p className="col-start-1 row-start-1 z-10 bg-red-200 w-fit h-fit my-6 px-5">Low in stock</p>
        <Link href={`/detailview/${id}`}>
          <Image src={img} alt="Logo" width={300} height={300} className="col-start-1 row-start-1" />
        </Link>
      </div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p>{description}</p>
      <button
        onClick={() => {
          setCart(id, title, price, img);
        }}
        className="bg-red-200 px-4 py-1 cursor-pointer"
      >
        Læg i kurv
      </button>
    </article>
  );
};

export default ProductCard;
