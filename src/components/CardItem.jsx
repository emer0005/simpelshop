import Image from "next/image";
import Testimg from "../../../public/testimg.png";
import QuantityPicker from "./QuantityPicker";

const CardItem = () => {
  return (
    <section className="grid grid-cols-3 items-center gap-4 p-4 rounded-lg max-w-xs">

      <div className="w-20 h-20 rounded-2xl overflow-hidden">
        <Image
          src={Testimg}
          alt="Produkt billede"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-lg font-medium">Produktnavn</h1>
        <QuantityPicker/>
      </div>

      <div className="flex justify-end items-end h-full">
        <p className="text-l">Pris</p>
      </div>

    </section>
  );
};

export default CardItem;
