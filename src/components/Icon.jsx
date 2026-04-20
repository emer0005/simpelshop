import { IoPerson } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import Link from "next/link";

const Icon = () => {
  return (
    <div className="flex gap-2">
      <IoPerson className="text-gray-300" />
      <IoMdHeart className="text-gray-300" />
      <Link href="/payment"><IoCart className="text-gray-300" /></Link>
      
    </div>
  );
};

export default Icon;
