"use client";
import { useRouter } from "next/navigation";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return <button onClick={() => router.push(`?category=${category}`)}>{category}</button>;
};

export default CategoryElement;
