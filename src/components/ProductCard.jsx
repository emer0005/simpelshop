import Image from "next/image";
import BtnPrimary from "./BtnPrimary";

const ProductCard = ({ title, description, img }) => {
  return (
    <article>
      <div className="grid">
        <p className="col-start-1 row-start-1 z-10 bg-red-200 w-fit h-fit my-6 px-5">Low in stock</p>
        <Image src={img} alt="Logo" width={300} height={300} className="col-start-1 row-start-1" />
      </div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p>{description}</p>
      <BtnPrimary text="LÆG I KURV" />
    </article>
  );
};

export default ProductCard;
