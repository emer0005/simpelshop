import Image from "next/image";
import Testimg from "../../../public/testimg.png";
import QuantityPicker from "./QuantityPicker";

const ProductDetails = () => {
    return ( 
        <section className="grid grid-cols-2 gap-6 max-w-[70rem] mx-auto mt-[2rem]">
            <div className="rounded-2xl overflow-hidden">
                <Image
                src={Testimg}
                alt="Produkt billede"
                className="w-full h-full object-cover"
                />
            </div>
            <div className="space-y-8 flex flex-col justify-center">
                <h1 className="text-2xl font-medium">Produktnavn</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <div>
            <QuantityPicker/>
            </div>
            </div>

        </section>
     );
}
 
export default ProductDetails;