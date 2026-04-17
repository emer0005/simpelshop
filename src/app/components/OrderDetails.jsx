const OrderDetails = () => {
    return ( 
        <section className="bg-[#E9E6E6] rounded-lg max-w-sm">
            <div className="ml-[1rem] pt-[1rem] pb-[1rem]">
            <h1 className="text-lg font-medium">Ordreoversigt</h1>
            <div className="flex gap-4 mt-[1rem]">
            <h2>Antal varer</h2>
            <p>2</p>
            </div>
            <div className="flex gap-4 mt-[1rem]">
            <h2>Subtotal</h2>
            <p>760,-</p>
            </div>
            </div>
        </section>
     );
}
 
export default OrderDetails;