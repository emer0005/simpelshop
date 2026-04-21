import Image from "next/image";
import QuantityPicker from "./QuantityPicker";
import { RxCross2 } from "react-icons/rx";
import useCart from "@/store/cart";

const CardItem = ({ price, title, img, id }) => {
  const { removeCart } = useCart();
  return (
    <section className="relative grid grid-cols-4 items-center gap-4 p-4 rounded-lg max-w-md">
      <div className="w-20 h-20 rounded-2xl overflow-hidden">
        <Image src={img} alt="Produkt billede" className="w-full h-full object-cover" width={500} height={500} />
      </div>

      <div className="flex flex-col justify-center w-full gap-2">
        <h1 className="text-2xl font-Regular w-full block flex-grow">{title}</h1>
        <QuantityPicker />
      </div>

      <div className="flex justify-end items-end h-full ">
        <p className="bottom-2 right-2 absolute text-xl font-semibold">{price},-</p>
      </div>
      <RxCross2
        className="absolute top-2 right-2 cursor-pointer text-xl"
        onClick={() => {
          removeCart(id, title, price, img);
        }}
      />
    </section>
  );
};

export default CardItem;
