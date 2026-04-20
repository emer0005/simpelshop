import Image from "next/image";
import QuantityPicker from "./QuantityPicker";


const ProductDetails = ({ img, title, description }) => {
  return (
    <section className="grid grid-cols-2 gap-6 max-w-[70rem] mx-auto mt-[2rem]">
      <div className="rounded-2xl overflow-hidden">
        <Image src={img} alt="Produkt billede" className="w-full h-full object-cover" width={500} height={500} />
      </div>
      <div className="space-y-8 flex flex-col justify-center">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p>{description}</p>
        <div>
          <QuantityPicker />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
