import Image from "next/image";
import Testimg from "../../../public/testimg.png";
import BtnPrimary from "./BtnPrimary";

const ProductCard = () => {
  return (
    <article>
      <div className="grid">
        <p className="col-start-1 row-start-1 z-10 bg-red-200 w-fit h-fit my-6 px-5">Low in stock</p>
        <Image src={Testimg} alt="Logo" width={300} height={300} className="col-start-1 row-start-1" />
      </div>
      <h1 className="text-xl font-semibold">Product title</h1>
      <p>Details</p>
      <BtnPrimary text="LÆG I KURV" />
    </article>
  );
};

export default ProductCard;
