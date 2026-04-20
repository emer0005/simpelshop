import Image from "next/image";
import QuantityPicker from "./QuantityPicker";
import { RxCross2 } from "react-icons/rx";
import useCart from "@/store/cart";

const CardItem = ({ price, title, img, id }) => {
  const { removeCart } = useCart();
  return (
    <section className="grid grid-cols-3 items-center gap-4 p-4 rounded-lg max-w-xs">
      <div className="w-20 h-20 rounded-2xl overflow-hidden">
        <Image src={img} alt="Produkt billede" className="w-full h-full object-cover" width={500} height={500} />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-lg font-medium">{title}</h1>
        <QuantityPicker />
      </div>

      <div className="flex justify-end items-end h-full">
        <p className="text-l">{price}</p>
      </div>
      <RxCross2
        onClick={() => {
          removeCart(id, title, price, img);
        }}
      />
    </section>
  );
};

export default CardItem;
