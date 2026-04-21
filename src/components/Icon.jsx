import { IoPerson } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import Link from "next/link";

const Icon = () => {
  return (
    <div className="flex gap-2">
      <IoPerson className="text-[#C5A582] text-xl" />
      <IoMdHeart className="text-[#C5A582] text-xl" />
      <Link href="/payment"><IoCart className="text-[#C5A582] text-xl" /></Link>
      
    </div>
  );
};

export default Icon;
