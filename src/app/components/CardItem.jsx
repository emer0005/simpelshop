import Testimg from "../../../public/testimg.png";

const CardItem = () => {
    return ( 
        <section className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
            <Image>
                src={Testimg}
                alt="Logo" 
                width={30} 
                height={10}
                className="block"
            </>
            </div>
            <div className="col-span-2">
            <h1>Produktnavn</h1>
            <h3 className="col-span-2 grid place-items-end p-4">Pris</h3>
            </div>
        </section>
     );
}
 
export default CardItem;