"use client";
import { useRouter } from "next/navigation";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return (
    <button className=" cursor-pointer px-4 py-2 rounded-full border border-[#C5A582] text-[#C5A582] hover:bg-[#C5A582] hover:text-white transition" onClick={() => router.push(category === "Alle kategorier" ? "/products" : `?category=${category}`)}>
      {category}
    </button>
  );
};

export default CategoryElement;
